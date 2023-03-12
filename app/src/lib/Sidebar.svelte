<script>
	export let open = false;
</script>

<aside class="absolute w-48 min-h-screen max-h-full bg-ets-grey  shadow-lg rounded-r-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="#about">Icon placeholder</a>
		<a class="block" href="#contact">Icon placeholder</a>

		<div class=" inset-x-0 bottom-0   ">
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
		z-index: 19;
	}

	.open {
		left: 0;
	}
</style>
