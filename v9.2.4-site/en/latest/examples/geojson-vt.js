"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6803],{99254:function(e,t,n){var o=n(49208),r=n(41564),i=n(43438),s=n(88887),u=n(98267),c=n(87240);const l=function(e,t){if(!t||!t.geometry)return t;let n;const o=t.type;let r=t.geometry;return 1===o?(n="MultiPoint",1==r.length&&(n="Point",r=r[0])):2===o?(n="MultiLineString",1==r.length&&(n="LineString",r=r[0])):3===o&&(n="Polygon",r.length>1&&(n="MultiPolygon",r=[r])),{type:"Feature",geometry:{type:n,coordinates:r},properties:t.tags}},a=new s.A({background:"#1a2b39",style:{"fill-color":["string",["get","COLOR"],"#eee"]}}),g=new r.A({layers:[a],target:"map",view:new c.Ay({center:[0,0],zoom:2})});fetch("https://openlayers.org/data/vector/ecoregions.json").then((function(e){return e.json()})).then((function(e){const t=geojsonvt(e,{extent:4096,debug:1}),n=new o.A({dataProjection:new i.A({code:"TILE_PIXELS",units:"tile-pixels",extent:[0,0,4096,4096]})}),r=new u.A({tileUrlFunction:function(e){return JSON.stringify(e)},tileLoadFunction:function(e,o){const i=JSON.parse(o),s=t.getTile(i[0],i[1],i[2]),u=JSON.stringify({type:"FeatureCollection",features:s?s.features:[]},l),c=n.readFeatures(u,{extent:r.getTileGrid().getTileCoordExtent(i),featureProjection:g.getView().getProjection()});e.setFeatures(c)}});a.setSource(r)}))}},function(e){var t;t=99254,e(e.s=t)}]);
//# sourceMappingURL=geojson-vt.js.map