<script>
	import Selector from '$lib/Selector.svelte';
	import LeafletMap from '$lib/LeafletMap.svelte';
	// import Map from '$lib/Map.svelte-decrapted';
	// import Map_test from '$lib/Map_test.svelte';
</script>

<main class="  mx-auto  w-fill">
	<!-- <main class=" container mx-auto  w-fill"> -->
	<!-- <div class="grid gap-3 md:grid-cols-1"> -->
	<div class="grid">
		<!-- <div class="bg-gray-300">Chart 1 placeholder</div>
		<div>Chart 2 placeholder</div>
		<div>Check indicators placeholder</div> -->
		<!-- <Map /> -->
		<LeafletMap />
	</div>
	<!-- </div> -->
</main>

<style>
	main {
		background-color: aquamarine;
	}
</style>
