webpackJsonp([1],{493:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(474),i=n(o),r=a(478),l=n(r),p=a(480),c=n(p),d=a(479),u=n(d),s=a(484),f=n(s),m=a(45),v=n(m),h=a(473),g=n(h),k=a(523),y=n(k),b=function(e){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,(0,i["default"])(t).apply(this,arguments))}return(0,f["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){var e=this.props,t=e.params,a=e.route;return v["default"].createElement("div",null,v["default"].createElement(g["default"],{params:t,route:a},v["default"].createElement(y["default"],null)))}}],[{key:"getChunks",value:function(){return["marvel.chunk.js"]}},{key:"fetchTodos",value:function(e,t){return g["default"].WrappedComponent?g["default"].WrappedComponent.fetchTodos(e,t):g["default"].fetchTodos(e,t)}}]),t}(m.Component);b.propTypes={params:m.PropTypes.object.isRequired,route:m.PropTypes.object.isRequired},t["default"]=b},523:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(474),i=n(o),r=a(478),l=n(r),p=a(480),c=n(p),d=a(479),u=n(d),s=a(484),f=n(s),m=a(45),v=n(m),h=a(524),g=n(h);a(525);var k=function(e){function t(){return(0,l["default"])(this,t),(0,u["default"])(this,(0,i["default"])(t).apply(this,arguments))}return(0,f["default"])(t,e),(0,c["default"])(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof console&&console.log("MarvelHeaderTitle componentDidMount"),g["default"].select(this.headerMarvel).transition().style("opacity",1).duration(5e3),g["default"].select(this.headerTodos).transition().style("opacity",0).duration(5e3)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillAppear",value:function(e){}},{key:"componentDidAppear",value:function(){}},{key:"componentWillEnter",value:function(e){}},{key:"componentDidEnter",value:function(){}},{key:"componentWillLeave",value:function(e){}},{key:"componentDidLeave",value:function(){}},{key:"render",value:function(){var e=this;return v["default"].createElement("div",null,v["default"].createElement("h1",{className:"header-todos",ref:function(t){e.headerTodos=t}},"todos"),v["default"].createElement("div",{className:"header-marvel",ref:function(t){e.headerMarvel=t}},v["default"].createElement("div",null,v["default"].createElement("span",{className:"sprite-icon-captain-america"}),v["default"].createElement("span",{className:"sprite-icon-hulk"}),v["default"].createElement("span",{className:"sprite-icon-ironman"}),v["default"].createElement("span",{className:"sprite-icon-thor"})),v["default"].createElement("div",null,v["default"].createElement("span",{className:"sprite-icon-deadpool"}),v["default"].createElement("span",{className:"sprite-icon-ghost-rider"}),v["default"].createElement("span",{className:"sprite-icon-spiderman"}),v["default"].createElement("span",{className:"sprite-icon-wolverine"}))))}}]),t}(m.Component);k.displayName="MarvelHeaderTitle",t["default"]=k},525:function(e,t,a){var n=a(526);"string"==typeof n&&(n=[[e.id,n,""]]);a(44)(n,{});n.locals&&(e.exports=n.locals)},526:function(e,t,a){t=e.exports=a(41)(),t.push([e.id,".todo-marvel-transition-appear.header-todos{opacity:1}.todo-marvel-transition-appear.header-marvel{opacity:0}.todo-marvel-transition-appear.todo-marvel-transition-appear-active{transition:opacity 10s ease-in}.todo-marvel-transition-appear.todo-marvel-transition-appear-active.header-todos{opacity:0}.todo-marvel-transition-appear.todo-marvel-transition-appear-active.header-marvel{opacity:1}.sprite-icon-captain-america{background-position:0 0;background-image:url("+a(527)+")}.sprite-icon-captain-america,.sprite-icon-hulk{background-repeat:no-repeat;overflow:hidden;display:inline-block;width:111px;height:111px}.sprite-icon-hulk{background-position:0 -111px;background-image:url("+a(527)+")}.sprite-icon-ironman{background-position:0 -222px;background-image:url("+a(527)+")}.sprite-icon-ironman,.sprite-icon-thor{background-repeat:no-repeat;overflow:hidden;display:inline-block;width:111px;height:111px}.sprite-icon-thor{background-position:0 -333px;background-image:url("+a(527)+")}.sprite-icon-deadpool{background-position:0 0;background-image:url("+a(528)+")}.sprite-icon-deadpool,.sprite-icon-ghost-rider{background-repeat:no-repeat;overflow:hidden;display:inline-block;width:111px;height:111px}.sprite-icon-ghost-rider{background-position:0 -111px;background-image:url("+a(528)+")}.sprite-icon-spiderman{background-position:0 -222px;background-image:url("+a(528)+")}.sprite-icon-spiderman,.sprite-icon-wolverine{background-repeat:no-repeat;overflow:hidden;display:inline-block;width:111px;height:111px}.sprite-icon-wolverine{background-position:0 -333px;background-image:url("+a(528)+")}",""])},527:function(e,t,a){e.exports=a.p+"res/imgs/edac02b27ebd6c4c691536f61304e469.png"},528:function(e,t,a){e.exports=a.p+"res/imgs/4965764deaf8c94f5c8e11a88b159e09.png"}});