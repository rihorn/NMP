//convert geojson to esri geojson

const fs = require('fs'),
    esriUtils = require('@esri/arcgis-to-geojson-utils'),
    chalk = require('chalk');

// create function to read file



    //us fs to read file name
    fs.readFile('../working-files/shapes.json', 'utf-8', (err, jsonString) => {

        if (err) throw err;

        //console.log(jsonString)

     

        //write data to directory

       const arcgis = esriUtils.geojsonToArcGIS(jsonString)
       console.log(arcgis)
   

        fs.writeFile('../working-files/shapesEsri.json', JSON.stringify(arcgis), 'utf-8', (err) => {

            if (err) throw err;
            console.log(chalk.green('esri geojson written to file'));

        });

    })

