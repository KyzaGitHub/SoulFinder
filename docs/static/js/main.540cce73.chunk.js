(this.webpackJsonpsoulfinder=this.webpackJsonpsoulfinder||[]).push([[0],{27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},48:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),i=a(16),l=a.n(i),s=(a(32),a(1)),c=a(2),d=a(3),p=a(4),u=a(10),m=a(13),h=a(7),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.Spring,{config:{friction:0,mass:200},from:{transform:"translateY(-10px)"},to:{transform:"translateY(0)"}},(function(e){return r.a.createElement("img",{style:e,id:"background",src:"".concat(window.location.protocol,"//").concat(window.location.host,"/background.png"),alt:"Background"})}))}}]),a}(r.a.Component),y=(a(48),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(u.b,{to:"/".concat(this.props.island.id),className:"island-card"},r.a.createElement("h1",null,this.props.island.name),r.a.createElement("img",{src:this.props.island.image,alt:this.props.island.name}))}}]),a}(r.a.Component)),g=a(6),S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=g.islands.map((function(e,t){return r.a.createElement(y,{key:"island-card-".concat(t),island:e})}));return r.a.createElement("div",{id:"home-panel"},r.a.createElement(h.Trail,{keys:function(e){return"".concat(e.key,"-spring")},config:{tension:450,friction:35},items:e,from:{transform:"translateY(-5%)",opacity:0},to:{transform:"translateY(0)",opacity:1}},(function(e){return function(t){return r.a.createElement("div",{style:t},e)}})))}}]),a}(r.a.Component),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=!1;return this.props.completedFairySouls[this.props.island.id]&&(t=this.props.completedFairySouls[this.props.island.id][this.props.fairySoul.id]),r.a.createElement("div",{className:"checkbox clickable"+(t?" checked":""),onClick:function(){e.props.setCompletedFairySoul(e.props.island.id,e.props.fairySoul.id,!t)}},r.a.createElement("div",{className:"checkbox-box"},r.a.createElement(h.Spring,{to:{width:"25px",height:"5px",transform:t?"translateX(6px) translateY(12px) rotate(-45deg)":"translateX(2.5px) translateY(12.5px) rotate(45deg)"}},(function(e){return r.a.createElement("div",{className:"checkbox-line",style:e})})),r.a.createElement(h.Spring,{to:{width:t?"15px":"25px",height:"5px",transform:t?"translateX(0px) translateY(10px) rotate(45deg)":"translateX(2.5px) translateY(7.5px) rotate(-45deg)"}},(function(e){return r.a.createElement("div",{className:"checkbox-line",style:e})}))),r.a.createElement("h1",{className:"checkbox-text"},this.props.text))}}]),a}(r.a.Component),E=(a(54),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h.Spring,{config:{tension:170,friction:18},from:{transform:"translateY(10%)",opacity:0},to:{transform:"translateY(0)",opacity:1}},(function(t){return r.a.createElement("div",{style:t,className:"fairySoul-card"},e.props.fairySoul?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{island:e.props.island,fairySoul:e.props.fairySoul,setCompletedFairySoul:e.props.setCompletedFairySoul,completedFairySouls:e.props.completedFairySouls,text:e.props.fairySoul.name}),e.props.fairySoul.description?r.a.createElement("p",null,e.props.fairySoul.description):"",r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},"Coordinates (X Y Z)"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.props.fairySoul.coords.x),r.a.createElement("td",null,e.props.fairySoul.coords.y),r.a.createElement("td",null,e.props.fairySoul.coords.z)))),e.props.fairySoul.items?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:e.props.fairySoul.items.length},"Items/Effects Needed"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,e.props.fairySoul.items.map((function(e,t){return r.a.createElement("td",{key:t},e)}))))):"",e.props.fairySoul.video?r.a.createElement("iframe",{title:"YouTube",src:"https://www.youtube-nocookie.com/embed/".concat(e.props.fairySoul.video,"?controls=0&autoplay=1&color=white&disablekb=1&loop=1&fs=0&modestbranding=1&showinfo=0&mute=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.a.createElement("h2",null,"Video coming soon...")):r.a.createElement("h1",null,"Select a fairy soul."))}))}}]),a}(r.a.Component)),v=a(26),x=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=!1;return this.props.completedFairySouls[this.props.island.id]&&(t=this.props.completedFairySouls[this.props.island.id][this.props.fairySoul.id]),r.a.createElement(h.Spring,{to:{backgroundColor:this.props.selectedFairySoul===this.props.fairySoulIndex?"rgba(0, 50, 100, 0.4)":"rgba(0, 0, 0, 0)",paddingLeft:this.props.selectedFairySoul===this.props.fairySoulIndex?"50px":"20px",border:t?"5px solid rgba(0, 50, 100, 0.4)":"5px solid rgba(0, 0, 0, 0)"}},(function(t){return r.a.createElement(u.b,{style:t,to:"/".concat(e.props.island.id,"/").concat(e.props.fairySoul.id),className:"navigation-item",onClick:function(){e.props.selectFairySoul(e.props.fairySoulIndex)}},e.props.fairySoul.name)}))}}]),a}(r.a.Component),O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=[r.a.createElement(u.b,{to:"/",id:"home",className:"navigation-item",key:"navigation-item-home"},"Home")].concat(Object(v.a)(this.props.island.fairySouls.map((function(t,a){return r.a.createElement(x,{key:"navigation-item-".concat(a),completedFairySouls:e.props.completedFairySouls,selectFairySoul:e.props.selectFairySoul,selectedFairySoul:e.props.selectedFairySoul,island:e.props.island,fairySoul:t,fairySoulIndex:a})}))));return r.a.createElement(h.Spring,{from:{transform:"translateX(-100%)",opacity:0},to:{transform:"translateX(0)",opacity:1}},(function(e){return r.a.createElement("div",{style:e,id:"navigation"},r.a.createElement(h.Trail,{keys:function(e){return"".concat(e.key,"-trail")},config:{tension:170,friction:18},items:t,from:{transform:"translateX(-100%)",opacity:0},to:{transform:"translateX(0)",opacity:1}},(function(e){return function(t){return r.a.createElement("div",{style:t},e)}})))}))}}]),a}(r.a.Component),k=(a(55),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).selectFairySoul=function(e){n.setState({selectedFairySoul:e})},n.setCompletedFairySoul=function(e,t,a){var o=JSON.parse(localStorage.getItem("completedFairySouls"));o[e]||(o[e]={}),o[e][t]=a,n.setState({completedFairySouls:o}),localStorage.setItem("completedFairySouls",JSON.stringify(o))};var o=Object(m.f)(window.location.pathname,{path:"/:islandID/:fairySoulID",exact:!1,strict:!1}),r=0;if(o)for(var i=(o=o.params).islandID,l=o.fairySoulID,c=0;c<g.islands.length;c++)if(g.islands[c].id===i)for(var d=0;d<g.islands[c].fairySouls.length;d++)g.islands[c].fairySouls[d].id===l&&(r=d);var p=JSON.parse(localStorage.getItem("completedFairySouls"));return p||(localStorage.setItem("completedFairySouls",JSON.stringify({})),p=JSON.parse(localStorage.getItem("completedFairySouls"))),n.state={selectedFairySoul:r,completedFairySouls:p},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"island-panel"},r.a.createElement(O,{completedFairySouls:this.state.completedFairySouls,selectFairySoul:this.selectFairySoul,selectedFairySoul:this.state.selectedFairySoul,island:this.props.island}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/".concat(this.props.island.id)},r.a.createElement(m.a,{to:this.props.island.fairySouls.length>0?"/".concat(this.props.island.id,"/").concat(this.props.island.fairySouls[0].id):"/"})),this.props.island.fairySouls.map((function(t,a){return r.a.createElement(m.b,{key:"fairySoul-card-".concat(a),path:"/".concat(e.props.island.id,"/").concat(t.id)},r.a.createElement(E,{island:e.props.island,fairySoul:t,setCompletedFairySoul:e.setCompletedFairySoul,completedFairySouls:e.state.completedFairySouls}))}))))}}]),a}(r.a.Component)),j=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"left"},"Made with \ud83e\udd0d and React"),r.a.createElement("div",{className:"right"},r.a.createElement("a",{id:"github",className:"social",href:"https://github.com/KyzaGitHub/SoulFinder",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"".concat(window.location.protocol,"//").concat(window.location.host,"/github.png"),alt:"GitHub"})),r.a.createElement("a",{id:"discord",className:"social",href:"https://discord.gg/c9ESSur",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"".concat(window.location.protocol,"//").concat(window.location.host,"/discord.svg"),alt:"Discord"}))))}}]),a}(r.a.Component),F=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404: Page Not Found"),r.a.createElement(u.b,{to:"/"},"Go Home"))}}]),a}(r.a.Component);a(56),a(57);function w(e){return e.replace(/[^0-9a-z]/gi,"")}for(var z=0;z<g.islands.length;z++){g.islands[z].id=w(g.islands[z].name),g.islands[z].image=(n=g.islands[z].name,"".concat(n.replace(/ /gi,"-").replace(/[^-0-9a-z]/gi,"").toLowerCase(),".png"));for(var N=0;N<g.islands[z].fairySouls.length;N++)g.islands[z].fairySouls[N].id=w(g.islands[z].fairySouls[N].name)}var C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(u.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(S,null)),g.islands.map((function(e,t){return r.a.createElement(m.b,{key:"island-panel-".concat(t),path:"/".concat(e.id)},r.a.createElement(k,{island:e}))})),r.a.createElement(m.b,{path:"*"},r.a.createElement(F,null)))),r.a.createElement(j,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));String.prototype.replaceAll=function(e,t){return this.split(e).join(t)},l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('{"islands":[{"name":"The Hub","fairySouls":[{"name":"The Bank","coords":{"x":0,"y":0,"z":0},"items":["Grappling Hook","Ender Pearl"],"description":"Near the top of the gold pile on top of the bank."},{"name":"The Mayor\'s House","coords":{"x":0,"y":0,"z":0},"description":"Behind the flames in the fireplace."}]},{"name":"The Barn","fairySouls":[{"name":"East Aqueduct","coords":{"x":182,"y":99,"z":-235},"description":"In the East Aqueduct."},{"name":"Windmill 1","coords":{"x":96,"y":96,"z":-287},"items":["Ender Pearl"],"description":"On the 3rd floor of the Windmill."},{"name":"Windmill 2","coords":{"x":99,"y":112,"z":-274},"items":["Ender Pearl"],"description":"On the sail of the Windmill."},{"name":"Chimney","coords":{"x":96,"y":96,"z":-287},"items":["Grappling Hook","Ender Pearl"],"description":"Next to the front chimney on top of the barn."},{"name":"East Mountains","coords":{"x":183,"y":99,"z":-304},"description":"Behind the east mountains."},{"name":"West Mountains","coords":{"x":157,"y":23,"z":-202},"description":"Inside the water coming from the west mountain."},{"name":"The Root","coords":{"x":157,"y":23,"z":-202},"description":"At the lowest point of root at the south of the island."}]},{"name":"Mushroom Desert","fairySouls":[]},{"name":"Gold Mine","fairySouls":[]},{"name":"Deep Caverns","fairySouls":[]},{"name":"Spider\'s Den","fairySouls":[{"name":"The Pit","coords":{"x":-244,"y":71,"z":-209},"description":"At the bottom of the obsidian and coal pit."},{"name":"Gravel Quarry 1","coords":{"x":-336,"y":81,"z":-287},"description":"Above the stairs in the gravel quarry."},{"name":"Gravel Quarry 2","coords":{"x":-316,"y":87,"z":-215},"description":"On the first level down of wooden slabs in the corner in the gravel quarry."},{"name":"Bones 1","coords":{"x":-341,"y":121,"z":-198},"description":"On top of the rib bones near the southwest edge of the island."},{"name":"Bones 2","coords":{"x":-283,"y":89,"z":-177},"description":"Inside a hidden room in the bones. Jump into a hole located at [-286, 94, -179], or jump onto the bone platform at [-276, 93, -180]."},{"name":"Bones 3","coords":{"x":-243,"y":89,"z":-312},"description":"Under a quartz stair in the skull."},{"name":"Bones 4","coords":{"x":-176,"y":95,"z":-337},"description":"On top of the rib bones near the northeast edge of the island."},{"name":"The Floating Bush","coords":{"x":-426,"y":85,"z":-183},"description":"Walk over the barrier blocks at [-390,\u202f84,\u202f-228]. The fairy soul is in the leaves floating over the void."},{"name":"North Edge","coords":{"x":-227,"y":73,"z":-360},"description":"Off the north edge of the island."},{"name":"Skeleton Cave","coords":{"x":-216,"y":95,"z":-337},"description":"Inside of the cave on the north edge of the island."},{"name":"Edge Stairs","coords":{"x":-152,"y":79,"z":-343},"description":"On the right of a set of stairs leading off the edge of the island. Walk over the green wool."}]},{"name":"Blazing Fortress","fairySouls":[{"name":"Northern Mountain","coords":{"x":-373,"y":172,"z":-682},"description":"On top of the northernmost mountain."},{"name":"Bridge 1","coords":{"x":-298,"y":75,"z":-543},"description":"On the right of the bridge."},{"name":"Bridge 2","coords":{"x":-320,"y":78,"z":-503},"description":"On the left of the bridge."},{"name":"East Edge 1","coords":{"x":-180,"y":90,"z":-607},"description":"The easternmost edge of the island."},{"name":"East Edge 2","coords":{"x":-213,"y":62,"z":-491},"description":"On barrier blocks east of the island."},{"name":"West Edge","coords":{"x":-431,"y":79,"z":-563},"description":"At the westernmost edge of the island."},{"name":"North Edge 1","coords":{"x":-346,"y":133,"z":-694},"description":"On the north edge of the island."},{"name":"North Edge 2","coords":{"x":-317,"y":203,"z":-739},"description":"At the northernmost edge of the island."},{"name":"The Tallest Roof","coords":{"x":-308,"y":146,"z":-426},"items":["Grappling Hook","Ender Pearl"],"description":"On top of the highest doubled roof."},{"name":"Top of the Mountain","coords":{"x":-432,"y":208,"z":-578},"items":["Ender Pearl"],"description":"At the top of the mountain."},{"name":"In the Flames","coords":{"x":-321,"y":139,"z":-442},"items":["Ender Pearl"],"description":"Behind the flames of the middle hopper on the wall."},{"name":"Edge of the Roof","coords":{"x":-372,"y":136,"z":-397},"items":["Grappling Hook","Ender Pearl"],"description":"On the edge of the leftmost tower."},{"name":"The Secret Room","coords":{"x":-306,"y":107,"z":-691},"description":"Go through the tunnel at [-305, 107, -704]."},{"name":"Stairs","coords":{"x":-312,"y":96,"z":-401},"items":["Pickaxe"],"description":"Under the left of the staircase."},{"name":"Glowstone","coords":{"x":-385,"y":104,"z":-461},"items":["Grappling Hook","Ender Pearl"],"description":"Hidden among the glowstone pockets."},{"name":"Lava River 1","coords":{"x":-378,"y":119,"z":-477},"items":["Lava Resistance"],"description":"In the lava."},{"name":"Lava River 2","coords":{"x":-335,"y":92,"z":-446},"items":["Lava Resistance"],"description":"In the lava."},{"name":"Lava Pool","coords":{"x":-235,"y":85,"z":-591},"items":["Lava Resistance","Pickaxe"],"description":"Under the lower block in the pool."},{"name":"The Lever Hole","coords":{"x":-311,"y":39,"z":-676},"description":"Flip the lever at [-307, 113, -675] and go down the hole to the left."}]},{"name":"The End","fairySouls":[]},{"name":"The Park","fairySouls":[]},{"name":"Winter Island","fairySouls":[]}]}')}},[[27,1,2]]]);
//# sourceMappingURL=main.540cce73.chunk.js.map