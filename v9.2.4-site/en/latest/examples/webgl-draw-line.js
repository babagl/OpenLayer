"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5880],{38723:function(e,t,a){var n=a(49208),r=a(36804),s=a(41564),o=a(87240),d=a(29117),i=a(74676),c=a(9444),l=a(90278),h=a(29810),u=a(28e3),p=a(12185),g=a(28487);let v;class m extends r.A{createRenderer(){return new d.A(this,{className:this.getClassName(),style:v})}}const f=new h.A({url:"data/geojson/switzerland.geojson",format:new n.A}),w=(e,t)=>{let a={variables:v?v.variables:{width:12,offset:0,capType:"butt",joinType:"miter",miterLimit:10,dashLength1:25,dashLength2:15,dashLength3:15,dashLength4:15,dashOffset:0,patternSpacing:0},"stroke-width":["var","width"],"stroke-color":"rgba(24,86,34,0.7)","stroke-offset":["var","offset"],"stroke-miter-limit":["var","miterLimit"],"stroke-line-cap":["var","capType"],"stroke-line-join":["var","joinType"]};return e&&(a={...a,"stroke-line-dash":[["var","dashLength1"],["var","dashLength2"],["var","dashLength3"],["var","dashLength4"]],"stroke-line-dash-offset":["var","dashOffset"]}),t&&(delete a["stroke-color"],a={...a,"stroke-pattern-src":"data/dot.svg","stroke-pattern-spacing":["var","patternSpacing"]}),a};v=w(!1,!1);let k=new m({source:f});const y=new s.A({layers:[new p.A({source:new u.A}),k],target:"map",view:new o.Ay({center:(0,g.Rb)([8.43,46.82]),zoom:7})}),L=()=>{const e=document.getElementById("dashEnable").checked,t=document.getElementById("patternEnable").checked;v=w(e,t),y.removeLayer(k),k=new m({source:f}),y.addLayer(k)},A=new i.A({source:f});let b,E;y.addInteraction(A),b=new c.Ay({source:f,type:"LineString"}),y.addInteraction(b),E=new l.A({source:f}),y.addInteraction(E);const I=e=>{const t=v.variables,a=e.target.name;"radio"===e.target.type?t[a]=e.target.value:t[a]=parseFloat(e.target.value);const n=document.getElementById(`value-${a}`);n&&(n.textContent=t[a]),y.render()};document.querySelectorAll("input.uniform").forEach((e=>e.addEventListener("input",I))),document.querySelectorAll("input.rebuild").forEach((e=>e.addEventListener("input",L)))}},function(e){var t;t=38723,e(e.s=t)}]);
//# sourceMappingURL=webgl-draw-line.js.map