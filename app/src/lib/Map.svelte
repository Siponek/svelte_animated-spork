<script>
	import { colors, district, geographyData } from '$lib/store.js';
	// import gl from
	import { onMount } from 'svelte';
	// import {get} from "svelte/store";
	import gl from 'maplibre-gl';

	const stops = [];
	$colors.forEach((color, index) => {
		stops.push([index + 1, color]);
	});
	const map_style = {
		version: 8,
		sources: {
			geography: {
				// type: 'geojson',
				// data: $geographyData
				type: 'geojson',
				data: $geographyData
			}
			// mapbox: {
			// 	type: 'vector',
			// 	url: 'mapbox://mapbox.mapbox-streets-v8'
			// }
		},
		layers: [
			{
				id: 'background',
				type: 'background',
				paint: {
					'background-color': 'rgba(53, 20, 144, 150)'
				}
			},
			{
				id: 'geography',
				source: 'geography',
				type: 'fill',
				paint: {
					'fill-color': 'rgba(200, 0, 0, 150)'
					// 'fill-outline-color': 'rgba(200, 0, 0, 1)'
				}
			}
		]
	};

	const map_options = {
		container: 'map',
		style: map_style,
		attributionControl: false,
		// center: [42.698586, 12.194958],
		center: [17.868856652837803, 40.26852264597055],
		// maxBounds: [
		// 	[42.6, 12.19], // Southwest coordinates
		// 	[42.8, 12.21] // Northeast coordinates
		// ],
		zoom: 11,
		minZoom: 2,
		maxZoom: 12
	};

	onMount(() => {
		const map = new gl.Map(map_options);
	});
</script>

<div id="map">
	<!-- <LeafletMap /> -->
</div>

<style>
	#map {
		height: 400px;
		width: 100%;
		background-color: azure;
	}
</style>
