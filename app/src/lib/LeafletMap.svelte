<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import {  district, geographyData } from '$lib/store.js';
	import { icon_layer_status, region_layer_status } from '$lib/store.js';
	let leaflet_map;
	let test_layer;
	let web_layer;
	let mapElement;
	// Subscribe to the store
	const unsub_icon_layer = icon_layer_status.subscribe((value) => {
		console.log('LeaftletMap: icon_layer_status.subscribe: ', value);
	});
	let region_borders;
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

    //function to retrieve api data ( coord, and data for popup)
    //which i'll insert properly
        let coord = []
        let popupNames = []
        let descriptions = []

    const showBasinShapeFileData = async (coord, popupNames,descriptions)=>{


            const data = await fetch('http://135.181.209.141:8000/app_ets/survey/as/point', {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(data.ok){
            const jsondata = await data.json()
            //console.log('coordJsondata', jsondata)
        const features = jsondata.result.features
        console.log('features', features)
        features.map(data =>{
            console.log('data', data)
            let coordinates = data.geometry.coordinates
            //--retrieving coordinates data - and stored 'em into a variable
            //console.log('coordinates', coordinates)
             let revCord = coordinates.reverse()
             //console.log('coord1test', revCord1, revCord2)
            coord.push(revCord)
            //--retrieving data for markers popup - and stored 'em into a variable
            let names = data.properties.name
            //console.log('name', names)
            popupNames.push(names)
            // adding descriptions data
            let des = data.properties.description
            console.log('desc', des)
            descriptions.push(des)
        })

}}
web_layer = new LeafletMC.MarkerClusterGroup();
function generateMarkers(){
        for (let i=0;i<coord.length;i++){
        let markers = Leaflet.marker(coord[i]).bindPopup(popupNames[i], descriptions[i]).openPopup()
        web_layer.addLayer(markers)
        //leaflet_map.fitBounds(coord)
    }
    }

showBasinShapeFileData(coord, popupNames, descriptions).then(generateMarkers)


// Adding street map

Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(leaflet_map);

			region_borders = Leaflet.geoJSON($geographyData, {
                style: function (feature) {
                    switch(feature.properties.distretti){
                        case 'DISTRETTO APPENNINO CENTRALE':
                            return {
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'green'
                            };
                         case 'DISTRETTO ALPI ORIENTALI':
                         return {
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'blue'
                            };
                            case 'DISTRETTO APPENNINO SETTENTRIONALE':
                         return {
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'red'
                            };
                            case 'DISTRETTO FIUME PO':
                         return {
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'orange'
                            };
                            case 'DISTRETTO SICILIA':
                         return {
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'brown'
                            };
                            case 'DISTRETTO SARDEGNA':
                         return {
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'yellow'
                            };
                            case 'DISTRETTO APPENNINO MERIDIONALE':
                         return {
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'purple'
                            };
                        default:
                            return{
                                color: 'blue',
                                weight: 2,
                                opacity: 0.5,
                                fillOpacity: 0.3,
                                fillColor: 'red'
                            }
                    }
        }});

			test_layer = Leaflet.layerGroup([center_italy, millan, rome]);

			test_layer.on('click', function (a) {
				console.log('marker ' + a.layer);
			});
			// Might good to add a click event to the region_borders layer
			region_borders.on('click', function (e) {
				console.log('LeafletMap: region_borders.on: ', e);
			});
		}

		return () => {
			if (leaflet_map) {
				console.log('Unloading Leaflet map.');
				map.remove();
			}
		};
	});

	$: if (test_layer && leaflet_map) {
		if ($icon_layer_status) {
			//test_layer.addTo(leaflet_map);
			web_layer.addTo(leaflet_map);
			//leaflet_map.addLayer(web_layer);
		} else {
			//test_layer.remove();
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
