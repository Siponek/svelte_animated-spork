<script>
	import { colors, district, geographyData } from '$lib/store.js';
	// import gl from
	import { onMount } from 'svelte';
	// import {get} from "svelte/store";
	import gl from 'maplibre-gl';
	import Title from '../components/Title.svelte';

	const stops = [];
	$colors.forEach((color, index) => {
		stops.push([index + 1, color]);
	});
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

	const map_options = {
		container: 'map',
		style: map_style,
		attributionControl: false,
		// center: [42.698586, 12.194958],
		center: [14, 42],
		maxBounds: [
			[2, 35], // Southwest coordinates
			[25, 50] // Northeast coordinates
		],
		zoom: 4.1,
		minZoom: 2,
		maxZoom: 12
	};

	onMount(() => {


		const map = new gl.Map(map_options);
		map.addControl(new gl.NavigationControl(), 'top-right');
		// const popup = new gl.Popup({ closeButton: false, closeOnClick: false });
		// map.on('mouseenter', 'geography', (e) => {
		// 	map.getCanvas().style.cursor = 'pointer';
		// 	// const coordinates = e.features[0].geometry.coordinates[0][0];
		// 	// const description = e.features[0].properties.name;
		// 	// popup.setLngLat(coordinates).setHTML(description).addTo(map);
		// });
		// map.on('mouseleave', 'geography', () => {
		// 	map.getCanvas().style.cursor = '';
		// 	popup.remove();
		// });

		// new gl.Marker().setLngLat([15.8, 41.25]).addTo(map);
		// new gl.Marker().setLngLat([16.7, 41.25]).addTo(map);
		// new gl.Marker().setLngLat([17.9, 41.25]).addTo(map);
	});
</script>

<!-- <Title /> -->
<div id="map" class=" w-screen h-screen">
	<!-- <LeafletMap /> -->
</div>

<style>
	#map {
		background-color: azure;
		position: relative;
		/* top: 0;
		right: 0;
		bottom: 0;
		left: 0; */
	}
</style>
