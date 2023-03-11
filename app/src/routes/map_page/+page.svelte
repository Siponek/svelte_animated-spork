<script>
	import Navbar from '$lib/Navbar.svelte';
	import Main from '$lib/Main.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	let open = false;
</script>

<div class="grid">
	<div class="grid md:grid-cols-1">
		<Navbar bind:sidebar={open} />
		<Main />
		<Sidebar bind:open />
	</div>
</div>
<footer
	class="p-4 rounded-lg text-center shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
>
	Footer placeholder
</footer>

<style lang="postcss">
	/* :global(html) {
		background-color: theme('colors.ets-grey');
	} */
	:global(body) {
		background-color: theme('colors.ets-grey');
		color: azure;
		padding: 0;
	}
</style>
