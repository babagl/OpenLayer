"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9981],{50296:function(e,t,n){var o=n(9444),i=n(41564),r=n(93595),c=n(87240),s=n(88292),a=n(38276),l=n(44689),u=n(21133),d=n(30470),f=n(77833),g=n(28e3),m=n(29810),w=n(12185),p=n(23986),h=n(7074),y=n(69878);const A=new w.A({source:new g.A}),v=new m.A,k=new p.A({source:v,style:{"fill-color":"rgba(255, 255, 255, 0.2)","stroke-color":"#ffcc33","stroke-width":2,"circle-radius":7,"circle-fill-color":"#ffcc33"}});let C,b,L,M,E;const N=new i.A({layers:[A,k],target:"map",view:new c.Ay({center:[-11e6,46e5],zoom:15})});N.on("pointermove",(function(e){if(e.dragging)return;let t="Click to start drawing";if(C){const e=C.getGeometry();e instanceof d.Ay?t="Click to continue drawing the polygon":e instanceof f.A&&(t="Click to continue drawing the line")}b.innerHTML=t,L.setPosition(e.coordinate),b.classList.remove("hidden")})),N.getViewport().addEventListener("mouseout",(function(){b.classList.add("hidden")}));const P=document.getElementById("type");let G;const I=new s.Ay({fill:new a.A({color:"rgba(255, 255, 255, 0.2)"}),stroke:new l.A({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new u.A({radius:5,stroke:new l.A({color:"rgba(0, 0, 0, 0.7)"}),fill:new a.A({color:"rgba(255, 255, 255, 0.2)"})})});function O(){const e="area"==P.value?"Polygon":"LineString";let t;G=new o.Ay({source:v,type:e,style:function(t){const n=t.getGeometry().getType();if(n===e||"Point"===n)return I}}),N.addInteraction(G),T(),function(){b&&b.parentNode.removeChild(b);b=document.createElement("div"),b.className="ol-tooltip hidden",L=new r.A({element:b,offset:[15,0],positioning:"center-left"}),N.addOverlay(L)}(),G.on("drawstart",(function(e){C=e.feature;let n=e.coordinate;t=C.getGeometry().on("change",(function(e){const t=e.target;let o;t instanceof d.Ay?(o=function(e){const t=(0,h.UG)(e);let n;return n=t>1e4?Math.round(t/1e6*100)/100+" km<sup>2</sup>":Math.round(100*t)/100+" m<sup>2</sup>",n}(t),n=t.getInteriorPoint().getCoordinates()):t instanceof f.A&&(o=function(e){const t=(0,h.R3)(e);let n;return n=t>100?Math.round(t/1e3*100)/100+" km":Math.round(100*t)/100+" m",n}(t),n=t.getLastCoordinate()),M.innerHTML=o,E.setPosition(n)}))})),G.on("drawend",(function(){M.className="ol-tooltip ol-tooltip-static",E.setOffset([0,-7]),C=null,M=null,T(),(0,y.e)(t)}))}function T(){M&&M.parentNode.removeChild(M),M=document.createElement("div"),M.className="ol-tooltip ol-tooltip-measure",E=new r.A({element:M,offset:[0,-15],positioning:"bottom-center",stopEvent:!1,insertFirst:!1}),N.addOverlay(E)}P.onchange=function(){N.removeInteraction(G),O()},O()}},function(e){var t;t=50296,e(e.s=t)}]);
//# sourceMappingURL=measure.js.map