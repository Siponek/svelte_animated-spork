<script>
	// import MdLayers from 'svelte-icons/md/MdLayers.svelte';
	import LayerButton from '$lib/LayerToggleIcon.svelte';
    import RegionButton from '$lib/RegionToggleIcon.svelte';
    import UserButton from '$lib/UserIcon.svelte';
	import { icon_layer_status, region_layer_status } from '$lib/store.js';

    function toggle_store_layer(store_layer)
    {
        console.log('Sidebad button: toggling store layer');
        store_layer.update((n) => !n);
    }

</script>

<aside class=" rounded-r-lg content-center relative object-none ">
	<LayerButton class ="p-1 icon fill-ets-blue" on:click={() => toggle_store_layer(icon_layer_status) }  />
	<RegionButton class ="p-1 icon fill-ets-blue" on:click={() => toggle_store_layer(region_layer_status)}  />
    <UserButton class ="p-1 icon user-icon text-green-600" />
</aside>


