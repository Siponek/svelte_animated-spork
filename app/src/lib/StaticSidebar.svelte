<script>
	// import MdLayers from 'svelte-icons/md/MdLayers.svelte';
	import LayerButton from '$lib/LayerIcon.svelte';
	import MdLayersClear from 'svelte-icons/md/MdLayersClear.svelte';
	import MdVerifiedUser from 'svelte-icons/md/MdVerifiedUser.svelte';
	import { icon_layer_status } from '$lib/store.js';

	export const layer_button_classes = {
		// make many classes
		class_name: 'icon',
		padding: 'p-1 ',
		color_fill: 'fill-ets-blue '
	};
	function toggleLayer() {
		console.log('Sidebad button: toggleLayer');
		icon_layer_status.update((n) => !n);
	}
	// TODO Make the button change the state in store and then use that state to manage Laflet layer
</script>

<aside class=" rounded-r-lg content-center relative object-none ">
	<LayerButton on:click={toggleLayer} {...layer_button_classes} />
	<div class=" p-1 icon">
		<MdLayersClear />
	</div>
	<div class="user-icon p-1 icon object-none object-bottom  ">
		<MdVerifiedUser />
	</div>
</aside>

<!-- <style>
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
</style> -->
