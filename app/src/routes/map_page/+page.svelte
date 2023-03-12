<script>
	import Navbar from '$lib/Navbar.svelte';
	import Main from '$lib/Main.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

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
<div class="container mx-auto ">
	<div class="text-center text-3xl front-boild">
		<!-- <div class="grid  md:grid-cols-4"> -->
		<div class="grid grid-cols-[max-content_1fr] h-fit w-fit  grid-flow-col auto-cols-max">
			<div class="col-start-auto w-30">static sidebar placeholder</div>
			<div class="col-start-auto  h-fit w-fit"><Main /></div>
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
		border-right: 0;
	}
</style>
