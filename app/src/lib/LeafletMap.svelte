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
            let revCord1 = revCord[0]
            let revCord2 = revCord[1]
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


showBasinShapeFileData(coord, popupNames, descriptions)
console.log('coord', coord, 'popupnames', popupNames, 'description', descriptions)

// //--creating the markers to add at the web_layer cluster, activated at the click of region icon
                let alatest = Leaflet.marker([45.76072, 11.00458]).bindPopup('ALA - TN').openPopup()
                let mark1 = Leaflet.marker(coord[0]).bindPopup(popupNames[0], descriptions[0]).openPopup();
                let mark2 = Leaflet.marker(coord[1]).bindPopup(popupNames[1], descriptions[1]).openPopup();
                let mark3 = Leaflet.marker(coord[2]).bindPopup(popupNames[2], descriptions[2]).openPopup();
                let mark4 = Leaflet.marker(coord[3]).bindPopup(popupNames[3], descriptions[3]).openPopup();
                let mark5 = Leaflet.marker(coord[4]).bindPopup(popupNames[4], descriptions[4]).openPopup();
                let mark6 = Leaflet.marker(coord[5]).bindPopup(popupNames[5], descriptions[5]).openPopup();
                let mark7 = Leaflet.marker(coord[6]).bindPopup(popupNames[6], descriptions[6]).openPopup();
                let mark8 = Leaflet.marker(coord[7]).bindPopup(popupNames[7], descriptions[7]).openPopup();
                let mark9 = Leaflet.marker(coord[8]).bindPopup(popupNames[8], descriptions[8]).openPopup();
                let mark10 = Leaflet.marker(coord[9]).bindPopup(popupNames[9], descriptions[9]).openPopup();
                let mark11 = Leaflet.marker(coord[10]).bindPopup(popupNames[10], descriptions[10]).openPopup();
                let mark12 = Leaflet.marker(coord[11]).bindPopup(popupNames[11], descriptions[11]).openPopup();
                let mark13 = Leaflet.marker(coord[12]).bindPopup(popupNames[12], descriptions[12]).openPopup();


             web_layer = new LeafletMC.MarkerClusterGroup({
				maxClusterRadius: 40
			});
            const liguria_region_marker = Leaflet.marker([44.5, 8.8333], {
				draggable: true,
				title: 'title'
			})
				.bindPopup('Liguria, 3 readings available')
				.openPopup();
			const genova_1 = Leaflet.marker([44.0, 8.5]).bindPopup('Genoa test1').openPopup();
			const genova_2 = Leaflet.marker([44.3, 8]).bindPopup('Genoa test2').openPopup();

          let markTest1 = Leaflet.marker([44.026175, 8.19934]).bindPopup("Alassio 1").openPopup()
                //--adding the markers layer into my cluster
                //web_layer.addLayer(markTest1)
                web_layer.addLayer(genova_1);
			    web_layer.addLayer(genova_2);
			    web_layer.addLayer(liguria_region_marker);

// Adding street map

Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(leaflet_map);

/*
 Leaflet.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(leaflet_map);

*/
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
			test_layer.addTo(leaflet_map);
			web_layer.addTo(leaflet_map);
			//leaflet_map.addLayer(web_layer);
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
