"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1078],{90097:function(e,t,n){var o=n(38276),l=n(49208),r=n(41564),s=n(44689),c=n(88292),u=n(23986),i=n(29810),a=n(87240);const w=new c.Ay({fill:new o.A({color:"#eeeeee"})}),A=new u.A({source:new i.A({url:"https://openlayers.org/data/vector/ecoregions.json",format:new l.A}),background:"white",style:function(e){const t=e.get("COLOR")||"#eeeeee";return w.getFill().setColor(t),w}}),f=new r.A({layers:[A],target:"map",view:new a.Ay({center:[0,0],zoom:2})}),g=new c.Ay({fill:new o.A({color:"#eeeeee"}),stroke:new s.A({color:"rgba(255, 255, 255, 0.7)",width:2})}),p=document.getElementById("status");let y=null;f.on("pointermove",(function(e){null!==y&&(y.setStyle(void 0),y=null),f.forEachFeatureAtPixel(e.pixel,(function(e){return y=e,g.getFill().setColor(e.get("COLOR")||"#eeeeee"),e.setStyle(g),!0})),p.innerHTML=y?y.get("ECO_NAME"):"&nbsp;"}))}},function(e){var t;t=90097,e(e.s=t)}]);
//# sourceMappingURL=select-hover-features.js.map