import loggerMaker from '../utils/logger';
import { POSTGRESQL_URI } from '../config';
import express from 'express';
import { pgNative as pg } from '../models';
import todoModel from '../models/todo';
import { todoRouter } from './todo';
import { socketIo as io } from '../socket';

const logger = loggerMaker(module);
const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get((req, res) => {
    pg.connect(POSTGRESQL_URI, (err, client, done) => {
      if (err) {
        logger.error(err);
        res.status(503).json({
          message: 'DB connection Error..!!'
        });
      } else {
        // console.log(req.session.userId);
        const userId = req.session.userId || req.query.userId;
        client.query(
          `SELECT ${todoModel.TODO_ID_COLUMN_NAME},
          ${todoModel.TODO_TEXT_COLUMN_NAME},
          ${todoModel.TODO_COMPLETED_COLUMN_NAME},
          ${todoModel.TODO_IS_EDITING_COLUMN_NAME}
          FROM ${todoModel.TODO_TABLE_NAME}
          WHERE ${todoModel.USER_ID_COLUMN_NAME} = '${userId}'
          ORDER BY ${todoModel.TODO_KEY_COLUMN_NAME} DESC;`
          , (queryErr, result) => {
          done();
          if (queryErr) {
            logger.error(queryErr);
            res.status(500).json({
              message: 'Error fetching data'
            });
          } else {
            res.set({
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache',
              Expires: -1
            })
            .json(result.rows);
          }
        });
      }
    });
  })
  .post((req, res) => {
    pg.connect(POSTGRESQL_URI, (err, client, done) => {
      if (err) {
        logger.error(err);
        res.status(503).json({
          message: 'DB connection Error..!!'
        });
      } else {
        client.query(
          `INSERT INTO ${todoModel.TODO_TABLE_NAME} (
            ${todoModel.TODO_ID_COLUMN_NAME},
            ${todoModel.TODO_TEXT_COLUMN_NAME},
            ${todoModel.USER_ID_COLUMN_NAME},
            ${todoModel.USER_IP_COLUMN_NAME}
          )
          VALUES (
            '${req.body.todoId}',
            '${req.body.todoText}',
            '${req.session.userId}',
            '${req.ip}'
          )
          RETURNING ${todoModel.TODO_ID_COLUMN_NAME};`
          , (queryErr, result) => {
          done();
          if (queryErr) {
            logger.error(queryErr);
            res.status(500).json({
              message: 'Error adding data'
            });
          } else {
            // @ For Test
            // setTimeout(() => res.status(500).json({
            //   todoId: result.rows[0][todoModel.TODO_ID_COLUMN_NAME],
            //   message: 'Data added'
            // }), 2000);
            // For Test @
            res.json({
              todoId: result.rows[0][todoModel.TODO_ID_COLUMN_NAME],
              message: 'Data added'
            });

            // emit to the all sockets in the room including the sender socket
            // and handle it on the client side by adding the sender socket id to the message
            if (io) {
              io.to(req.session.userId).emit('dbChange', {
                message: 'Data added',
                senderId: req.body.socketId
              });
            }
          }
        });
      }
    });
  })
  .put((req, res) => {
    pg.connect(POSTGRESQL_URI, (err, client, done) => {
      if (err) {
        logger.error(err);
        res.status(503).json({
          message: 'DB connection Error..!!'
        });
      } else {
        client.query(
          `UPDATE ${todoModel.TODO_TABLE_NAME} SET
          ${todoModel.TODO_COMPLETED_COLUMN_NAME} = ${req.body.todoAllCompleted};`
          , (queryErr, result) => {
          done();
          if (queryErr) {
            logger.error(queryErr);
            res.status(500).json({
              message: 'Error updating datas'
            });
          } else {
            res.json({
              updatedTodosNum: result.rowCount,
              message: 'Datas updated'
            });

            if (io) {
              io.to(req.session.userId).emit('dbChange', {
                message: 'Data updated',
                senderId: req.body.socketId
              });
            }
          }
        });
      }
    });
  })
  .delete((req, res) => {
    pg.connect(POSTGRESQL_URI, (err, client, done) => {
      if (err) {
        logger.error(err);
        res.status(503).json({
          message: 'DB connection Error..!!'
        });
      } else {
        client.query(
          `DELETE FROM ${todoModel.TODO_TABLE_NAME}
          WHERE ${todoModel.TODO_COMPLETED_COLUMN_NAME} = true;`
          , (queryErr, result) => {
          done();
          if (queryErr) {
            logger.error(queryErr);
            res.status(500).json({
              message: 'Error deleting datas'
            });
          } else {
            res.json({
              deletedTodosNum: result.rowCount,
              message: 'Datas deleted'
            });
          }
        });
      }
    });
  });

router.use('/', todoRouter);

export {
  router as todosRouter
};
