<script>
	import Selector from '$lib/Selector.svelte';
	import LeafletMap from '$lib/LeafletMap.svelte';
	import Map from '$lib/Map.svelte';
	import Map_test from '$lib/Map_test.svelte';
</script>

<div class="container mx-auto py-1">
	<div class="grid gap-3 md:grid-cols-1">
		<!-- <div class="grid gap-y-3">
			<div class="bg-gray-300">Chart 1 placeholder</div>
			<div>Chart 2 placeholder</div>
			<div>Check indicators placeholder</div>
		</div> -->
		<div class="bg-gray-300 md:col-span-3 md:col-start-1"><Map /></div>
	</div>
	<div class="bg-gray-200 text-right">Footer placeholder</div>
</div>
wowowlo
