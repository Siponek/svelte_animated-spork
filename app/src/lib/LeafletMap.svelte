<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { colors, district, geographyData } from '$lib/store.js';

	let mapElement;
	let map;
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
			// add markers to layer
			const test_layer = leaflet.layerGroup([center_italy, millan, rome]);
			test_layer.addTo(map);

			// Add the GeoJSON data to the map

			leaflet
				.geoJSON($geographyData, {
					style: function (feature) {
						return {
							color: 'blue',
							weight: 2,
							opacity: 0.5,
							fillOpacity: 0.3,
							fillColor: 'green'
						};
					}
				})
				.addTo(map);
			// $geographyData.sources.forEach((element) => {
			// 	let polygon = leaflet.polygon(element.coordinates, { color: 'red' }).addTo(map);
			// });
			// leaflet
			// 	.geoJSON($geographyData, {
			// 		style: function (feature) {
			// 			return { color: feature.properties.color };
			// 		}
			// 	})
			// 	.bindPopup(function (layer) {
			// 		return layer.feature.properties.description;
			// 	})
			// 	.addTo(map);
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<div bind:this={mapElement} class="w-fit" />

<!-- <div class="h-screen v-screen" bind:this={mapElement} /> -->
<style>
	@import 'leaflet/dist/leaflet.css';
	div {
		height: 86.9999vh;
		width: 100%;
		z-index: 10;
	}
</style>
