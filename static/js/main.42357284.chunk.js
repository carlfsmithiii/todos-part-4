(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},26:function(e,t,n){e.exports=n(39)},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),l=n(41),i=n(4),u=n(7),d=n(8),s=n(6),m=n(22),p="all",f="active",v="completed",b="COMPLETE_TODO",O="REMOVE_TODO",E="ADD_TODO",h="CLEAR_COMPLETED_TODOS",j="SET_FILTER",y={todos:m.reduce(function(e,t){return e[t.id]=t,e},{}),filter:p},g=Object(u.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.todos,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:for(var n=Object(s.a)({},e),a=Object.keys(n),o=0;o<a.length;o++){var r=a[o];n[r].completed&&delete n[r]}return n;case O:var c=Object(s.a)({},e);return delete c[t.payload],c;case b:var l=Object(s.a)({},e),i=Object(s.a)({},l[t.payload]);return i.completed=!i.completed,Object(s.a)({},l,Object(d.a)({},i.id,i));case E:var u=e&&Object.values(e).length>0?Object.values(e).reduce(function(e,t){return e.id>t.id?e.id:t.id})+1:1,m=Object(s.a)({},t.payload,{id:u});return Object(s.a)({},e,Object(d.a)({},u,m));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.filter,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;default:return e}}}),C=n(9),w=n(10),T=n(13),F=n(11),N=n(14);var k=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(T.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(o)))).state={new_todo:""},n.onFormChange=function(e){var t=e.target.value;n.setState(function(){return{new_todo:t}})},n.onFormSubmit=function(e){e.preventDefault(),n.state.new_todo.length>0&&n.props.addTodo(n.state.new_todo),n.setState(function(){return{new_todo:""}})},n}return Object(N.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("form",{onSubmit:this.onFormSubmit},o.a.createElement("input",{className:"new-todo",placeholder:"what do you need to do?",onChange:this.onFormChange,name:"new-todo",autoFocus:!0,value:this.state.new_todo})))}}]),t}(a.Component),_=Object(i.b)(null,function(e){return{addTodo:function(t){return e(function(e){return{type:E,payload:{userId:1,title:e,completed:!1}}}(t))}}})(k);function A(e){var t=e.completed,n=e.title,a=e.completeTodo,r=e.removeTodo;return o.a.createElement("li",{className:t?"completed":""},o.a.createElement("div",{className:"view"},o.a.createElement("input",{className:"toggle",type:"checkbox",checked:t,onChange:function(){return a()}}),o.a.createElement("label",null,n),o.a.createElement("button",{className:"destroy",onClick:function(){return r()}})))}var D=Object(i.b)(function(e,t){return{todos:e.todos,displayFilter:t.displayFilter}},function(e){return{completeTodo:function(t){e(function(e){return{type:b,payload:e}}(t))},removeTodo:function(t){e(function(e){return{type:O,payload:e}}(t))}}})(function(e){var t=e.todos,n=e.completeTodo,a=e.removeTodo,r=e.displayFilter;t=t||{};var c=Object.values(t);return r===f?c=c.filter(function(e){return!e.completed}):r===v&&(c=c.filter(function(e){return e.completed})),o.a.createElement("ul",{className:"todo-list"},c&&c.map(function(e){return o.a.createElement(A,{key:e.id,title:e.title,completed:e.completed,completeTodo:function(){return n(e.id)},removeTodo:function(){return a(e.id)}})}))}),I=n(40),S=n(42);var x=Object(S.a)(Object(i.b)(function(e){return{todos:e.todos}},function(e){return{clearCompleted:function(){return e({type:h})},setFilter:function(t){return e(function(e){return{type:j,payload:e}}(t))}}})(function(e){var t=e.todos,n=e.clearCompleted,a=e.setFilter,r=t?Object.values(t).length:0,c=t?Object.values(t).reduce(function(e,t){return t.completed?++e:e},0):0;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,r-c)," item(s) left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement(I.a,{exact:!0,to:"/",activeClassName:"selected",onClick:function(){return a(p)}},"All")),o.a.createElement("li",null,o.a.createElement(I.a,{exact:!0,to:"/active",activeClassName:"selected",onClick:function(){return a(f)}},"Active")),o.a.createElement("li",null,o.a.createElement(I.a,{exact:!0,to:"/completed",activeClassName:"selected",onClick:function(){return a(v)}},"Completed"))),c>0&&o.a.createElement("button",{className:"clear-completed",onClick:n},"Clear completed"))})),L=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(T.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).renderTodoListAndFooter=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(_,null),o.a.createElement(D,{displayFilter:e}),o.a.createElement(x,{displayFilter:e}))},n}return Object(N.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"todoapp"},this.renderTodoListAndFooter(this.props.filter))}}]),t}(a.Component),q=Object(i.b)(function(e){return{filter:e.filter}})(L),M=(n(37),Object(u.c)(g));c.a.render(o.a.createElement(function(e){var t=e.store;return o.a.createElement(i.a,{store:t},o.a.createElement(l.a,{basename:"/todos-part-4"},o.a.createElement(q,null)))},{store:M}),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.42357284.chunk.js.map