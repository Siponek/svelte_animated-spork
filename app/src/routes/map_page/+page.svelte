<script>
	import Navbar from '$lib/Navbar.svelte';
	import Main from '$lib/Main.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<Main />

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
