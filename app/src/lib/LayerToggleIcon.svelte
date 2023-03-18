<script>
	import MdLayers from 'svelte-icons/md/MdLayers.svelte';
    let clazz ;
    export { clazz as class }
</script>

<!-- <button class={color_fill}> -->
<button on:click class={` ${clazz || ''}`}>
	<MdLayers />
</button>