<script>
	import { colors, district, geography } from '$lib/store.js';
	// import gl from
	import { onMount } from 'svelte';
	// import {get} from "svelte/store";
	import gl from 'maplibre-gl';

	const map_style = {
		version: 8,
		sources: {
			mapbox: {
				type: 'vector',
				url: 'mapbox://mapbox.mapbox-streets-v8'
			}
		},
		layers: {
			id: 'background',
			type: 'background',
			paint: {
				'background-color': 'red'
			}
		}
	};

	const map_options = {
		container: 'map',
		style: map_style,
		attributionControl: false,
		center: [-122.4194, 37.7749],
		maxBounds: [
			[-122.5, 37.7], // Southwest coordinates
			[-122.3, 37.9] // Northeast coordinates
		],
		zoom: 9.3,
		minZoom: 8,
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
