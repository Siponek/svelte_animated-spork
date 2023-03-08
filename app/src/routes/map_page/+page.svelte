<script>
	import Selector from '$lib/Selector.svelte';
</script>

<div class="container mx-auto py-3">
	<div class="text-center text-3xl font-bold">Title</div>
	<div class="grid gap-3 md:grid-cols-4">
		<div class="grid gap-y-3">
			<div class="bg-gray-300">Chart 1</div>
			<div>Chart 2</div>
			<div>Check indicators</div>
		</div>
		<div class="bg-gray-300 md:col-span-3 md:col-start-2"><Selector /></div>
		<div class="bg-gray-300 md:col-span-3 md:col-start-2">Map</div>
	</div>
	<div class="bg-gray-200">Footer</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.gray.400');
	}
</style>
