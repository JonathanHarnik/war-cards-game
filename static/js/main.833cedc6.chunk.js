(this.webpackJsonpwargame=this.webpackJsonpwargame||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/hp-background.1d7d81d8.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/green-background.ee6c2c75.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/wood-background.ea44f6c3.jpeg"},23:function(e,t,a){e.exports=a.p+"static/media/picnic-background.f226fd9c.jpg"},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),s=a.n(c),l=(a(29),a(6)),o=a(7),p=a(9),i=a(8),u=(a(30),a(10)),m=a(1),d=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setName=function(e){return[r.setState({name:e.target.value})]},r.setBackground=function(e){r.setState({backgrounud:e.target.value})},r.state={name:"",backgrounud:""},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h1",{id:"hp-title"},"Ready for WAR"),n.a.createElement("div",{id:"hp-input-div"},n.a.createElement("input",{onChange:this.setName,placeholder:"Enter your name",id:"hp-input"}),n.a.createElement("select",{onChange:this.setBackground,id:"backgroundSelect"},n.a.createElement("option",{disable:!0,selected:!0},"Select background"),n.a.createElement("option",{value:"poker"},"Poker table"),n.a.createElement("option",{value:"wood"},"Wooden table"),n.a.createElement("option",{value:"picnic"},"Picnic table")),n.a.createElement(u.b,{to:"/game"},n.a.createElement("button",{id:"hp-btn",onClick:function(){e.props.setPlayer(e.state.name,e.state.backgrounud)}},"Start"))))}}]),a}(r.Component),h=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).cardColor=function(){return"\u2660\ufe0e"==r.props.player.type||"\u2663\ufe0e"==r.props.player.type?"black":"\u2665\ufe0e"==r.props.player.type||"\u2666\ufe0e"==r.props.player.type?"red":void 0},r.state={},r}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"cards-div"},n.a.createElement("div",{className:"card comp-card"},n.a.createElement("div",{className:"card-top"},n.a.createElement("h4",null,this.props.player.num),n.a.createElement("h6",{style:{color:this.cardColor}},this.props.player.type)),n.a.createElement("div",{className:"card-mid"},n.a.createElement("h1",null,this.props.player.type)),n.a.createElement("div",{className:"card-btm"},n.a.createElement("h4",null,this.props.player.num),n.a.createElement("h6",null,this.props.player.type))),n.a.createElement("div",{className:"card player-card"},n.a.createElement("div",{className:"card-top"},n.a.createElement("h4",null,this.props.comp.num),n.a.createElement("h6",null,this.props.comp.type)),n.a.createElement("div",{className:"card-mid"},n.a.createElement("h1",null,this.props.comp.type)),n.a.createElement("div",{className:"card-btm"},n.a.createElement("h4",null,this.props.comp.num),n.a.createElement("h6",null,this.props.comp.type))))}}]),a}(r.Component),y=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).splitDeck=function(){var e=Math.floor(Math.random()*r.state.counter);r.setState({compCard:r.state.compCards[e]}),r.setState({playerCard:r.state.playerCards[r.state.counter-1]});var t=r.state.playerCards;t.splice(r.state.counter,1),r.setState({playerCards:t});var a=r.state.compCards;a.splice(e,1),r.setState({compCards:a}),r.setState({counter:r.state.counter-1}),r.setState({style:{opacity:1,pointerEvents:"all"}}),r.setState({flag:!0})},r.deal=function(e){0!==r.state.counter?e.preventDefault():r.props.result(r.state.win,r.state.lose),r.state.compCard.num>r.state.playerCard.num?r.setState({win:r.state.win+1}):r.setState({lose:r.state.lose+1});var t=Math.floor(Math.random()*r.state.counter);r.setState({compCard:r.state.compCards[t]}),r.setState({playerCard:r.state.playerCards[r.state.counter-1]});var a=r.state.playerCards;a.splice(r.state.counter,1),r.setState({playerCards:a});var n=r.state.compCards;n.splice(t,1),r.setState({compCards:n}),r.setState({counter:r.state.counter-1})},r.show=function(){return 0==r.state.flag?n.a.createElement("button",{id:"dealBtn",onClick:r.splitDeck},"Deal"):1==r.state.flag?n.a.createElement("div",null,n.a.createElement(h,{player:r.state.playerCard,comp:r.state.compCard})):void 0},r.state={style:{opacity:0,pointerEvents:"none"},compCards:r.props.compCards,playerCards:r.props.playerCards,playerCard:"",compCard:"",counter:26,flag:!1,win:0,lose:0},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("h1",{id:"compName"},"Computer"),this.show(),n.a.createElement(u.b,{to:"/end",onClick:function(t){e.deal(t)}},n.a.createElement("button",{style:this.state.style,id:"nextBtn"},"Next")),n.a.createElement("h1",{id:"playerName"},this.props.name))}}]),a}(r.Component),v=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"result-div"},n.a.createElement("h1",{className:"result-title"},this.props.result),n.a.createElement("h3",{className:"total-results"},this.props.wins,"-",this.props.loses),n.a.createElement(u.b,{to:"/game"},n.a.createElement("button",{onClick:function(){e.props.createDeck()},className:"result-btn"},"Again")),n.a.createElement(u.b,{to:"/"},n.a.createElement("button",{className:"result-btn"},"Sign out"))))}}]),a}(r.Component),E=a(20),b=a.n(E),f=a(21),C=a.n(f),k=a(22),g=a.n(k),S=a(23),j=a.n(S),w=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).setPlayer=function(e,t){r.setState({player:{name:e,wins:0,loses:0}}),"poker"===t?r.setState({background:"url(".concat(C.a,")")}):"wood"===t?r.setState({background:"url(".concat(g.a,")")}):"picnic"===t&&r.setState({background:"url(".concat(j.a,")")}),r.createDeck()},r.createDeck=function(){for(var e=[],t=["\u2660\ufe0e","\u2663\ufe0e","\u2665\ufe0e","\u2666\ufe0e"],a=1;a<14;a++)for(var n=0;n<4;n++)e.push({num:a,type:t[n]});r.setState({deck:e});for(var c=[],s=1;s<=26;s++){var l=Math.floor(27*Math.random());c.push(e[l]),e.splice(l,1)}r.setState({playerCards:c}),r.setState({compCards:e})},r.result=function(e,t){if(e>t){r.setState({result:"Win"});var a=r.state.player;a.wins++,r.setState({player:a})}else{r.setState({result:"Lose"});var n=r.state.player;n.loses++,r.setState({player:n})}},r.state={player:"",background:"url(".concat(b.a,")"),deck:[],playerCards:"",compCards:"",result:""},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"body",style:{backgroundImage:this.state.background}},n.a.createElement(u.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:function(){return n.a.createElement(d,{setPlayer:e.setPlayer})}}),n.a.createElement(m.a,{exact:!0,path:"/game",component:function(){return n.a.createElement(y,{deck:e.state.deck,name:e.state.player.name,playerCards:e.state.playerCards,s:!0,compCards:e.state.compCards,result:e.result})}}),n.a.createElement(m.a,{exact:!0,path:"/end",component:function(){return n.a.createElement(v,{wins:e.state.player.wins,loses:e.state.player.loses,result:e.state.result,createDeck:e.createDeck})}}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.833cedc6.chunk.js.map