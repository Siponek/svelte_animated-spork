<script>
	import MdVerifiedUser from 'svelte-icons/md/MdVerifiedUser.svelte';
    let clazz ;
    export { clazz as class }
</script>

<!-- <button class={color_fill}> -->
<button on:click class={` ${clazz || ''}`}>
	<MdVerifiedUser />
</button>

