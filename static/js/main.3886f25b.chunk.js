(this["webpackJsonptrivia-battle"]=this["webpackJsonptrivia-battle"]||[]).push([[0],{13:function(e,a,t){e.exports=t(27)},24:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),o=t(1),s=(t(24),t(4)),u=t.n(s),i=t(7),p=t(2),m=(t(26),t(3));var y=function(e){var a=e.message,t=e.button,n=e.onClick;return r.a.createElement("div",{className:"alert"},r.a.createElement("p",null,a),r.a.createElement("button",{onClick:n},t))};var E=Object(o.b)((function(e){return{topics:e.topics}}),null)((function(e){var a=e.availableTopics,t=e.dispatch,l=Object(n.useState)([]),c=Object(p.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)("P1"),i=Object(p.a)(u,2),E=i[0],d=i[1],b=Object(n.useState)("P2"),f=Object(p.a)(b,2),v=f[0],h=f[1],O=Object(n.useState)(!1),g=Object(p.a)(O,2),j=g[0],w=g[1],S=function(e){for(var t=e.target.value,n=!1,r=0;r<o.length;r++)if(o[r].id===a[t].id){n=!0;var l=Object(m.a)(o);return l.splice(r,1),void s(l)}if(!n){var c=Object(m.a)(o);c.push(a[t]),s(c)}};return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"selectTopicDiv",onSubmit:function(e){e.preventDefault(),o.length>=4?t({type:"SELECT_TOPICS",topic:o,name1:E,name2:v}):w(!0)}},r.a.createElement("p",null,"Please enter the player's names and select at least 4 topics:"),r.a.createElement("div",{className:"playersNames"},r.a.createElement("label",{htmlFor:"playerOne"},"Player One: "),r.a.createElement("input",{type:"text",id:"playerOne",onChange:function(e){d(e.target.value)},value:E,required:!0}),r.a.createElement("label",{htmlFor:"playerTwo"},"Player Two: "),r.a.createElement("input",{type:"text",id:"playerTwo",onChange:function(e){h(e.target.value)},value:v,required:!0})),r.a.createElement("ul",{className:"topicsContainer"},a.map((function(e,a){return r.a.createElement("li",{className:"topicElement",key:a},r.a.createElement("input",{tabIndex:0,onChange:S,type:"checkbox",name:e.name,id:e.name,value:a}),r.a.createElement("label",{htmlFor:e.name},e.name))}))),j?r.a.createElement(y,{message:"Please select at least 4 topics from the list!",button:"OK",onClick:function(){w(!1)}}):"",r.a.createElement("button",{type:"submit"},"START")))}));var d=Object(o.b)((function(e){return{topics:e.topics,player:e.players[e.player].name}}),null)((function(e){var a=e.topics,t=e.player,l=e.dispatch,c=Object(n.useState)(!1),o=Object(p.a)(c,2),s=o[0],m=o[1],y=Object(n.useState)(a[0]||["popo"]),E=Object(p.a)(y,2),d=E[0],b=E[1],f=Object(n.useState)("easy"),v=Object(p.a)(f,2),h=v[0],O=v[1],g=function(e){O(e.target.value)},j=function(){var e=Object(i.a)(u.a.mark((function e(a,t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://opentdb.com/api.php?amount=1&category=".concat(a.id,"&difficulty=").concat(t,"&type=multiple&encode=url3986"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,console.log(c.results[0]),l({type:"SET_QUESTION",question:c.results[0]}),m(!1);case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return console.log(t),r.a.createElement("div",{className:"rouletteDiv"},r.a.createElement("h2",null,"".concat(t,"'s turn")),r.a.createElement("p",{className:"rouletteCategory"}," ",r.a.createElement("span",null,"Category:")," ","".concat(d.name)),r.a.createElement("div",{className:"rouletteRadioButtons"},r.a.createElement("input",{type:"radio",name:"easy",value:"easy",id:"easy",checked:"easy"===h,onChange:g}),r.a.createElement("label",{htmlFor:"easy"},"Easy (1pt)"),r.a.createElement("input",{type:"radio",name:"medium",id:"medium",value:"medium",checked:"medium"===h,onChange:g}),r.a.createElement("label",{htmlFor:"medium"},"Medium (2pt)"),r.a.createElement("input",{type:"radio",name:"hard",id:"hard",value:"hard",checked:"hard"===h,onChange:g}),r.a.createElement("label",{htmlFor:"hard"},"Hard (3pt)")),r.a.createElement("button",{disabled:s,onClick:function(){m(!0);var e=0,t="",n=Math.floor(3e3*Math.random()+1e3),r=setInterval((function(){t=a[e],b(t),e===a.length-1?e=0:e++}),100);setTimeout((function(){clearInterval(r),j(t,h)}),n)}},"Spin"))}));var b=Object(o.b)((function(e){return{playerOneName:e.players.player1.name,playerTwoName:e.players.player2.name,playerOneScore:e.players.player1.score,playerTwoScore:e.players.player2.score,turn:e.turn}}),null)((function(e){var a=e.playerOneName,t=(e.playerTwoName,e.playerOneScore),n=e.playerTwoScore,l=e.turn;return r.a.createElement("div",{className:"scoreBoard"},r.a.createElement("h3",null,l<5?"Turns Remaning: ".concat(6-l):"Last Turn!"),r.a.createElement("div",{className:"playersScores"},r.a.createElement("p",null," ",r.a.createElement("span",null,"".concat(a,": "))," ","".concat(t)),r.a.createElement("p",null,"VS"),r.a.createElement("p",null,r.a.createElement("span",null,"".concat(a,": ")),"".concat(n))))}));var f=Object(o.b)((function(e){return{player:e.players[e.player].name}}),null)((function(e){var a=e.question,t=e.dispatch,l=e.player,c=Object(n.useState)(),o=Object(p.a)(c,2),s=o[0],u=o[1],i=[].concat(Object(m.a)(a.incorrect_answers),[a.correct_answer]).sort((function(){return.5-Math.random()})),E=function(e){if(e.target.value===a.correct_answer)switch(a.difficulty){case"easy":u(1);break;case"medium":u(2);break;default:u(3)}else u(0)};return r.a.createElement("div",{className:"questionContainer"},r.a.createElement("h2",null,"Category: ".concat(unescape(a.category))),r.a.createElement("h3",null,unescape(a.question)),r.a.createElement("div",{className:"options"},i.map((function(e){return r.a.createElement("button",{disabled:s>=0,onClick:E,value:e},unescape(e))}))),void 0!==s?r.a.createElement(y,{message:0===s?"".concat(l," Your answer was incorrect!"):"CORRECT ".concat(l,"! You win ").concat(s," ").concat(s>1?"points.":"point."),button:"OK",onClick:function(){t(function(e){return{type:"ANSWER",points:e}}(s))}}):"")}));var v=Object(o.b)((function(e){return{question:e.question,turn:e.turn,playerOneScore:e.players.player1.score,playerTwoScore:e.players.player2.score,playerOne:e.players.player1.name,playerTwo:e.players.player2.name}}),null)((function(e){var a=e.question,t=e.turn,n=e.playerOneScore,l=e.playerTwoScore,c=e.playerOne,o=e.playerTwo,s=e.dispatch;return r.a.createElement("div",{className:"gameBoard wrapper"},r.a.createElement(b,null),null!==a?r.a.createElement(f,{question:a}):r.a.createElement(d,null),6!==t?"":r.a.createElement(y,{message:n===l?"It's a tie! Play again and see who wins!":n>l?"".concat(c," Wins !!! Hey ").concat(o," can you beat ").concat(c,"? Ask for a REMATCH!"):"".concat(o," Wins!!! Hey ").concat(c," can you beat ").concat(o,"? Ask for a REMATCH!"),button:"Restart",onClick:function(){s({type:"RESTART"})}}))}));var h=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Trivia ",r.a.createElement("span",null,"Battle !!")))};var O=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Created by Juan Acaiturri-Villa \xa9 2020"))};var g=Object(o.b)((function(e){return{topics:e.topics,players:e.players,question:e.question,turn:e.turn}}),null)((function(e){var a=e.topics,t=(e.players,e.question,e.turn,Object(n.useState)([])),l=Object(p.a)(t,2),c=l[0],o=l[1],s=Object(n.useState)(!0),m=Object(p.a)(s,2),y=m[0],d=m[1];function b(){return(b=Object(i.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n.trivia_categories),d(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){b.apply(this,arguments)}("https://opentdb.com/api_category.php")}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(h,null),y?r.a.createElement("p",null,"loading.."):a.length?r.a.createElement(v,null):r.a.createElement(E,{availableTopics:c}),r.a.createElement(O,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(6),w={topics:[],players:{player1:{name:"",score:0},player2:{name:"",score:0}},turn:1,player:"player1",question:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SELECT_TOPICS":return console.log(a.topic),Object.assign({},e,{topics:Object(m.a)(a.topic),players:{player1:{name:a.name1,score:0},player2:{name:a.name2,score:0}},player:"player1"});case"SET_QUESTION":return Object.assign({},e,{question:a.question});case"ANSWER":return Object.assign({},e,{question:null,player:"player1"===e.player?"player2":"player1",turn:"player2"===e.player?e.turn+1:e.turn,players:{player1:{score:"player1"===e.player?e.players.player1.score+a.points:e.players.player1.score,name:e.players.player1.name},player2:{score:"player2"===e.player?e.players.player2.score+a.points:e.players.player2.score,name:e.players.player2.name}}});case"RESTART":return Object.assign({},w);default:return e}},T=Object(j.b)(S);c.a.render(r.a.createElement(o.a,{store:T},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.3886f25b.chunk.js.map