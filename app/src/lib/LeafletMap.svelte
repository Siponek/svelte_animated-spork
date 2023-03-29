<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { colors, district, geographyData } from '$lib/store.js';
	import { icon_layer_status, region_layer_status } from '$lib/store.js';
    import * as api from '$lib/Api';
	let leaflet_map;
	let test_layer;
	let web_layer;
	let mapElement;
	// Subscribe to the store
	const unsub_icon_layer = icon_layer_status.subscribe((value) => {
		console.log('LeaftletMap: icon_layer_status.subscribe: ', value);
	});
	let region_borders;
    let basinGeomCoordinates;
    let basinGeomCoordData;

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
				style: function (feature) {
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
         //add basin shapefile data

         const showBasinShapeFileData = async ()=>{
                let geomData = []

                try {
                    //retrieving the data from be api
                //     const data2 = await fetch('https://jsonplaceholder.typicode.com/posts', {
                //        method:'GET',
                //          headers:{
                //       'Content-Type':'application/json'
                //        }
                //    })
                //     const jsonData2 = await data2.json()
                //     geomData.push(jsonData2)
                //    console.log('geomdata', geomData)
                 //console.log('jsondata2',jsonData2)

               const data = await api.get('restapi/survey');
                const jsondata = await data.json()
                console.log('jsondata', jsondata)
                //looping through the data to select our required info
                 const itemsData = Object.entries(jsondata);
                 console.log(itemsData);
                 itemsData.map(itemsd =>{
                    const items = itemsd.items
                    items.map(data =>{
                    const description = data.description
                    const name = data.name
                    geomData.push(description, name)
                    console.log('geomData', geomData)
                    })
                    //--verify wether to put other data as well--
                 })
                } catch (error) {
                   console.error(error.message)
                }

            }
            //add basin shapefile coordinates
            const showBasinShapeFileCoordinates = async ()=>{
                try {
                let geomCoord = []
                 //retrieving the coordinates from our api
                const coordinatesObj = await api.get('pointclouds');
                const data = await coordinatesObj.json()
                console.log(data)
                /*
                    //loop to retrieve the required data //

                    //push the required data in geomCoord variable//
                */
                } catch (error) {
                    console.error(error.message)
                }
            }
            console.log('basin data', showBasinShapeFileData());
            console.log('basin coordinates', showBasinShapeFileCoordinates());

            //-- function to retrieve the data to put in the popup
                //-- and attach the popup to the markers I set
                // in their related coordinate--//


                //--//

         //--function to launch the marker, only when map is set on a specific zoom--//
                /*
              map.on('zoomstart', function(e){
                if(map.getZoom()> --- && map.getZomm()< ----){
                    //--show markers with related popup --//
                }
              })
              */
            //--//
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
