<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import {  district, geographyData } from '$lib/store.js';
	import { icon_layer_status, region_layer_status } from '$lib/store.js';
	import { assign } from 'svelte/internal';
	let leaflet_map;
	let test_layer;
	let web_layer;
	let mapElement;
	// Subscribe to the store
	const unsub_icon_layer = icon_layer_status.subscribe((value) => {
		console.log('LeaftletMap: icon_layer_status.subscribe: ', value);
	});
	let region_borders;
    let basinGeomCoordinates =[]
    let basinGeomCoordData = []
	// On mount, when the component is created
	onMount(async () => {
		if (browser) {
			const Leaflet = await import('leaflet');
			const LeafletMC = await import('leaflet.markercluster');
			const center_italy = Leaflet.marker([42.698586, 12.194958])
				.bindPopup('Centre of italy.')
				.openPopup();
			const millan = Leaflet.marker([45.4642, 9.1895]).bindPopup('Milan').openPopup();
			const rome = Leaflet.marker([41.9028, 12.4964]).bindPopup('Rome').openPopup();
			leaflet_map = Leaflet.map(mapElement).setView([42.0, 12.194958], 6);
			leaflet_map.setMinZoom(6).setMaxZoom(9).setZoom(6);
			const liguria_region_marker = Leaflet.marker([44.5, 8.8333], {
				draggable: true,
				title: 'title'
			})
				.bindPopup('Liguria, 3 readings available')
				.openPopup();
			const genova_1 = Leaflet.marker([44.0, 8.5]).bindPopup('Genoa test1').openPopup();
			const genova_2 = Leaflet.marker([44.3, 8]).bindPopup('Genoa test2').openPopup();
			web_layer = new LeafletMC.MarkerClusterGroup({
				maxClusterRadius: 40
			});
			web_layer.addLayer(genova_1);
			web_layer.addLayer(genova_2);
			web_layer.addLayer(liguria_region_marker);

			// Adding street map
			Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(leaflet_map);

			region_borders = Leaflet.geoJSON($geographyData, {
				style: (feature) => {
					return {
						color: 'blue',
						weight: 2,
						opacity: 0.5,
						fillOpacity: 0.3,
						fillColor: 'green'
					};
				}
			});
			test_layer = Leaflet.layerGroup([center_italy, millan, rome]);

			test_layer.on('click', function (a) {
				console.log('marker ' + a.layer);
			});
			// Might good to add a click event to the region_borders layer
			region_borders.on('click', function (e) {
				console.log('LeafletMap: region_borders.on: ', e);
			});
		}
/* LOGIN*/

const login = async () =>{
    const userLogin = {
             "email": "mario@ets.it",
             "password": "lazypasssword" }
    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cookie':'a39e72ee-ce1c-11ed-978e-0242ac130003'
        },
        body: JSON.stringify(userLogin)
    }
        const login = await fetch('http://135.181.209.141:8000/app_ets/auth/api/login', settings)
        if(login.ok){
            return login.json()
        }
        console.log('there is an error')
}
login()
//-end of LOGIN -//

//function to retrieve data to be put in markers popup from survey api

const showBasinShapeFileData = async (geomDataP)=>{
    const data = await fetch('http://135.181.209.141:8000/app_ets/restapi/survey')
 if(data.ok){
        const jsondata = await data.json()
        console.log('jsondata', jsondata)
        const convArr = Object.entries(jsondata)
         console.log('convarr',convArr)
        const items = convArr[3]
        const rItems = items[1]
        console.log('rItems', rItems)
        rItems.map((itemsData) =>{
            let basinNames = []
            let basinDescriptions = []
           console.log('itemsData',itemsData)
           const names = itemsData.name
           const descriptions = itemsData.description
           basinNames.push(names)
           basinDescriptions.push(descriptions)
        // geomData.push(basinNames, basinDescriptions)
		geomDataP.push(basinNames,basinDescriptions)
           console.log('ge', geomDataP)
     })
    }
  }
     showBasinShapeFileData(basinGeomCoordData)
  	console.log('basinGeomCoordData',basinGeomCoordData)

    //function to retrieve coordinates data from pointclouds api
    const showBasinShapeFileCoordinates = async (coordDataP)=>{
        //const data = await fetch('http://135.181.209.141:8000/app_ets/pointclouds', {
            const data = await fetch('http://135.181.209.141:8000/app_ets/survey/as/point', {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(data.ok){
            const jsondata = await data.json()
            console.log('coordJsondata', jsondata)
        const obJsonData = Object.entries(jsondata)
        console.log('obj', obJsonData)
        const result = obJsonData[2]
        //console.log('result', result)
        const geom = result[1]
       // console.log('geom', geom)
        const arrGeom = Object.entries(geom)
        //console.log('arrGeom', arrGeom)
        const geomArr = arrGeom[0]
        //console.log('geomArr', geomArr)
        const fGeom = geomArr[1]
        //console.log('fGeom', fGeom)
        fGeom.map(coord =>{
            //console.log('cord', coord)
            const geomC = coord.geometry
            const fCoordinates = geomC.coordinates
            const fCoord1 = fCoordinates[0]
            const fCoord2 = fCoordinates[1]
            //console.log('geomC', geomC)
            console.log('fCoord', fCoordinates)
            coordDataP.push( fCoord1, fCoord2)
        })
        }
    }
        showBasinShapeFileCoordinates(basinGeomCoordinates)
        console.log('basinShapeFileCoordinates', basinGeomCoordinates)

const copyGeomCoords = basinGeomCoordinates
console.log('copy', copyGeomCoords)
/*
const assignMarkers = ()=>{
 for(let i = 0; i < copyGeomCoords.length; i++) {
  console.log(copyGeomCoords[i]);
  const coord1 =copyGeomCoords[0]
  //---
  for (let x=0;x<basinGeomCoordData.length;x++){
    const data = basinGeomCoordData[0]
//---
//--aggiunta markers  e popup ----
  //  const mark1 = Leaflet.marker().setMinZoom().setMaxZoom().bindPopup().openPopup()
  }
}
}

*/


		return () => {
			if (leaflet_map) {
				console.log('Unloading Leaflet map.');
				map.remove();
			}
		};
	});
	$: if (test_layer && leaflet_map) {
		if ($icon_layer_status) {
			test_layer.addTo(leaflet_map);
			web_layer.addTo(leaflet_map);
			// leaflet_map.addLayer(web_layer);
		} else {
			test_layer.remove();
			web_layer.remove();
			// leaflet_map.addLayer(web_layer);
		}
	}
	// Add the GeoJSON data to the leaflet_map
	$: if (region_borders && leaflet_map) {
		if ($region_layer_status) {
			region_borders.addTo(leaflet_map);
		} else {
			region_borders.remove();
		}
	}
	// Might be redundant
	onDestroy(() => {
		unsub_icon_layer();
	});
</script>

<div bind:this={mapElement} class="" />

<style>
	@import 'leaflet/dist/leaflet.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
	div {
		height: calc(100vh - 80px);
		width: 100%;
		z-index: 10;
	}
</style>
