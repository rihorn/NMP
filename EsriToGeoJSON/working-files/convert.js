require(arcgis-geojson-utils);

import { arcgisToGeoJSON } from '@esri/arcgis-to-geojson-utils';
import { geojsonToArcGIS } from '@esri/arcgis-to-geojson-utils';


// take GeoJSON and convert it to ArcGIS JSON
const arcgis = geojsonToArcGIS({
    "type": "Point",
    "coordinates": [45.5165, -122.6764]
  });