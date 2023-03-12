<script>
	import MdLayers from 'svelte-icons/md/MdLayers.svelte';
	import MdLayersClear from 'svelte-icons/md/MdLayersClear.svelte';
	import MdVerifiedUser from 'svelte-icons/md/MdVerifiedUser.svelte';
</script>

<aside class=" rounded-r-lg content-center relative object-none ">
	<div class=" p-1 icon fill-ets-blue">
		<MdLayers />
	</div>
	<div class=" p-1 icon ets-blue">
		<MdLayersClear />
	</div>
	<div class="user-icon p-1 icon ets-blue object-none object-bottom  ">
		<MdVerifiedUser />
	</div>
</aside>

<style>
	.icon {
		width: 2.5rem;
		height: 2.5rem;
		color: rgb(20, 106, 181);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	/* hover */
	.icon:hover {
		color: rgb(80, 80, 80);
		background-color: azure;
		border-radius: 45%;
		transition: 0.3s ease-in-out;
	}
	.user-icon {
		bottom: -70vh;
	}
</style>
