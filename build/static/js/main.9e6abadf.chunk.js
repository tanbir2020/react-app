(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),c=(n(13),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(14),n(15),n(16),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("h1",null,e.name))}),f=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,name:e.name})})))},d=(n(17),function(e){var t=e.handler;return r.a.createElement("input",{className:"search-box",onChange:t})}),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var n=e.state.monsters;e.setState({filteredMonsters:n.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())}))})},e.state={monsters:[],filteredMonsters:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t}),e.setState({filteredMonsters:t})}))}},{key:"render",value:function(){var e=this.state.filteredMonsters;return r.a.createElement("div",{className:"App"},r.a.createElement(d,{handler:this.handleChange}),r.a.createElement(f,{monsters:e}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9e6abadf.chunk.js.map