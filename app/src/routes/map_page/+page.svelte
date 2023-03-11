<script>
	import Selector from '$lib/Selector.svelte';
	import LeafletMap from '$lib/LeafletMap.svelte';
	import Map from '$lib/Map.svelte';
	import Map_test from '$lib/Map_test.svelte';
</script>

<div class="container mx-auto py-3">
	<div class="text-center text-3xl font-bold">Title placeholder</div>
	<div class="grid gap-3 md:grid-cols-4">
		<div class="grid gap-y-3">
			<div class="bg-gray-300">Chart 1 placeholder</div>
			<div>Chart 2 placeholder</div>
			<div>Check indicators placeholder</div>
		</div>
		<div class="bg-gray-300 md:col-span-3 md:col-start-2"><Selector /></div>
		<div class="bg-gray-300 md:col-span-3 md:col-start-2"><Map /></div>
		<!-- <div class="bg-gray-300 md:col-span-3 md:col-start-2"><Map_test /></div> -->
	</div>
	<div class="bg-gray-200">Footer placeholder</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.gray.400');
	}
</style>
