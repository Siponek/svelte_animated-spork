<script>
	import MdLandscape from 'svelte-icons/md/MdLandscape.svelte'
    let clazz ;
    export { clazz as class }
</script>

<!-- <button class={color_fill}> -->
<button on:click class={` ${clazz || ''}`}>
	<MdLandscape />
</button>