<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { colors, district, geographyData } from '$lib/store.js';
	import { icon_layer_status, region_layer_status } from '$lib/store.js';

	let mapElement;
	export let map;
	export let test_layer;

	const map_style = {
		version: 8,
		sources: {
			geography: {
				type: 'geojson',
				data: $geographyData
			}
		},
		layers: [
			{
				id: 'background',
				type: 'background',
				paint: {
					'background-color': 'rgb(230,230,230)'
				}
			},
			{
				id: 'geography',
				source: 'geography',
				type: 'fill',
				paint: {
					'fill-color': 'rgb(20,106,181 )',
					'fill-opacity': 0.8,
					'fill-outline-color': 'rgb(100, 100, 100 )'
				}
			}
		]
	};
	const unsub_icon_layer = icon_layer_status.subscribe((value) => {
		console.log('LeaftletMap: icon_layer_status.subscribe: ', value);
	});
	let region_borders;

	// On mount, when the component is created
	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([42.0, 12.194958], 6);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			const center_italy = leaflet
				.marker([42.698586, 12.194958])
				.bindPopup('Centre of italy.')
				.openPopup();
			const millan = leaflet.marker([45.4642, 9.1895]).bindPopup('Milan').openPopup();
			const rome = leaflet.marker([41.9028, 12.4964]).bindPopup('Rome').openPopup();
			region_borders = leaflet.geoJSON($geographyData, {
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
			// add markers to layer
			test_layer = leaflet.layerGroup([center_italy, millan, rome]);

			// Might good to add a click event to the region_borders layer
			region_borders.on('click', function (e) {
				console.log('LeafletMap: region_borders.on: ', e);
			});
		}
		return () => {
			if (map) {
				console.log('Unloading Leaflet map.');
				map.remove();
			}
		};
	});
	$: if (test_layer && map) {
		if ($icon_layer_status) {
			test_layer.addTo(map);
		} else {
			test_layer.remove();
		}
	}
	// Add the GeoJSON data to the map
	$: if (region_borders && map) {
		if ($region_layer_status) {
			region_borders.addTo(map);
		} else {
			region_borders.remove();
		}
	}
	// Might be redundant
	onDestroy(() => {
		unsub_icon_layer();
	});
</script>

<div bind:this={mapElement} class=""  />
<style>
	@import 'leaflet/dist/leaflet.css';
	div {
		height: 90vh;
		width: 100%;
		z-index: 10;
	}
	div {
		min-height: 91vh;
        display: grid;
        grid-template-rows: 1fr auto;
	}

</style>
