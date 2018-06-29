//use fs to read the shapes.json file

const fs = require('fs');
const esriUtils = require('@esri/arcgis-to-geojson-utils');

const geojson = fs.readFile('../working-files/shapes.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err)
    }
    // console.log(data);
    return geojson;
});


const esriGeojson = esriUtils.geojsonToArcGIS({
    geojson
});


fs.writeFile('../working-files/esriShapes.json', JSON.stringify(esriGeojson), 'utf8', (err) => {

    if (err) throw err;

    console.log('esriGeojson written to file')
});

function esriGeojson() {

    
}
