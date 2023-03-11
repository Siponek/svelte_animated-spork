<script>
	export let open = false;
</script>

<aside class="absolute w-16 h-screen bg-ets-grey border-r-2 shadow-lg" class:open>
	<nav class="px-1 py-20 text-xl">
		<a class="block" href="#about">Icon placeholder</a>
		<a class="block" href="#contact">Icon placeholder</a>

		<div class="absolute inset-x-0 bottom-0   ">
			<a class="block" href="#about">Icon placeholder</a>
			<a class="block" href="#contact">Icon placeholder</a>
		</div>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		border: 0;
	}

	.open {
		left: 0;
	}
</style>
