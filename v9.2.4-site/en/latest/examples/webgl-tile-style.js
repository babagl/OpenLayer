"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1715],{61270:function(t,e,a){var r=a(41564),n=a(96256),o=a(87240),s=a(55238);const i={exposure:0,contrast:0,saturation:0},u=new n.A({style:{exposure:["var","exposure"],contrast:["var","contrast"],saturation:["var","saturation"],variables:i},source:new s.A({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512,maxZoom:20})});new r.A({target:"map",layers:[u],view:new o.Ay({center:[0,0],zoom:0})});let p;for(p in i){const t=p,e=document.getElementById(t),a=i[t];e.value=a.toString(),document.getElementById(t+"-value").innerText=a.toFixed(2),e.addEventListener("input",(function(e){const a=parseFloat(e.target.value);document.getElementById(t+"-value").innerText=a.toFixed(2);const r={};r[t]=a,u.updateStyleVariables(r)}))}}},function(t){var e;e=61270,t(t.s=e)}]);
//# sourceMappingURL=webgl-tile-style.js.map