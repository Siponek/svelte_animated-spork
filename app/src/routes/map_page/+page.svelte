<script>
	import Selector from '$lib/Selector.svelte';
</script>

<div class="tw-container tw-mx-auto tw-py-3">
	<div class="tw-text-center tw-text-3xl tw-font-bold">Title</div>
	<div class="tw-grid tw-gap-3 tw-md:grid-cols-4">
		<div class="tw-bg-gray-300 tw-md:col-span-1"><Selector /></div>
		<div class="tw-bg-gray-300 tw-md:col-span-3">Map</div>
		<div class="tw-grid tw-gap-y-3">
			<div class="tw-bg-gray-300">Chart 1</div>
			<div>Chart 2</div>
			<div>Check indicators</div>
		</div>
	</div>
	<div>Footer</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme('colors.gray.400');
	}
</style>
