<script>
	import Logo from './Logo.svelte';
	import Hamburger from './Hamburger.svelte';
	import Menu from './Menu.svelte';

	export let sidebar = false;
</script>

<header class="flex justify-between bg-ets-blue p-2 items-cente border-b-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
		<!-- <Logo /> -->
	</nav>

	<Menu />
</header>

<!-- <div class="grid auto-cols-auto grid-cols-3 text-teal-200">
	<div class="bg-slate-400 py-3 text-center">
		<p><a href="/login">DEV Login</a></p>
	</div>
	<div class="bg-slate-500 py-3 text-center">
		<p><a href="/register">DEV Register</a></p>
	</div>
	<div class="bg-slate-600 py-3 text-center">
		<p><a href="/map_page">DEV Map page</a></p>
	</div>
</div> -->
<style>
	header {
		padding: 0;
		border: 0;
	}
</style>
