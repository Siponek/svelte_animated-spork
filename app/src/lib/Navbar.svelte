<script>
	import Logo from './Logo.svelte';
	import Hamburger from './Hamburger.svelte';
	import Menu from './Menu.svelte';

	export let sidebar = false;
</script>

<header class="flex justify-between bg-ets-blue p-2  border-b-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
	</nav>

	<Menu />
</header>

<style>
	header {
		padding: 0;
		border: 0;
		height: 40px;
	}
</style>
