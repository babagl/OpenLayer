// window.onload = init

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center:[-12080385,756],
            zoom: 2
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
                
            })
        ],
        target: "js-map"

    })
    
}

init();

