"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5607],{28170:function(e,n,o){var t=o(41564),s=o(14407),c=o(12185),i=o(87240),r=o(28487);function a(e){return(0,r.DI)(e,"EPSG:4326","EPSG:3857")}const u={India:a([68.17665,7.96553,97.40256,35.49401]),Argentina:a([-73.41544,-55.25,-53.62835,-21.83231]),Nigeria:a([2.6917,4.24059,14.57718,13.86592]),Sweden:a([11.02737,55.36174,23.90338,69.10625])},l="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ",w=new c.A({source:new s.A({url:"https://api.tiles.mapbox.com/v4/mapbox.world-light.json?secure&access_token="+l,crossOrigin:"anonymous"})}),m=new c.A({extent:u.India,source:new s.A({url:"https://api.tiles.mapbox.com/v4/mapbox.world-black.json?secure&access_token="+l,crossOrigin:"anonymous"})});new t.A({layers:[w,m],target:"map",view:new i.Ay({center:[0,0],zoom:1})});for(const e in u)document.getElementById(e).onclick=function(e){m.setExtent(u[e.target.id])}}},function(e){var n;n=28170,e(e.s=n)}]);
//# sourceMappingURL=layer-extent.js.map