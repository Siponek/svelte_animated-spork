<script>
	import Navbar from '$lib/Navbar.svelte';
	import Main from '$lib/Main.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import StaticSidebar from '$lib/StaticSidebar.svelte';
	import LeafletMap from '$lib/LeafletMap.svelte';
	let open = false;
</script>

<Sidebar bind:open />
<div class="grid">
	<div class="grid md:grid-cols-1">
		<Navbar bind:sidebar={open} />
		<!-- <Main /> -->
		<Sidebar bind:open />
	</div>
</div>
<div class=" mx-auto ">
	<div class="text-center text-3xl front-boild">
		<!-- <div class="grid  md:grid-cols-4"> -->
		<div class="grid grid-cols-12 ">
			<div class=" col-span-1"><StaticSidebar /></div>
			<div class=" col-span-11"><LeafletMap /></div>
			<!-- <div>map column</div> -->
			<!-- <div>map column</div> -->
		</div>
	</div>
</div>
<div class="footer-wrapper flex flex-col min-h-0">
	<footer
		class=" mt-auto p-4 rounded-lg text-center shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
	>
		Footer placeholder
	</footer>
</div>

<style lang="postcss">
	/* :global(html) {
		background-color: theme('colors.ets-grey');
	} */
	:global(body) {
		background-color: theme('colors.ets-grey');
		color: azure;
		padding: 0;
	}
	.container {
		background-color: green;
		padding: 0;
		border: 0;
		margin: 0;
	}
</style>
