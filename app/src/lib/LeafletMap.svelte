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
			// add markers to layer
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
