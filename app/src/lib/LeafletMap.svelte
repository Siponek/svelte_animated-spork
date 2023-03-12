<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let mapElement;
	let map;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([42.698586, 12.194958], 7);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet
				.marker([42.698586, 12.194958])
				.addTo(map)
				.bindPopup('Centre of italy.')
				.openPopup();
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
