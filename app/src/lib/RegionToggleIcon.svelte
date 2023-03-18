<script>
	import MdLandscape from 'svelte-icons/md/MdLandscape.svelte'
	export let padding = 'p-36 ';
	export let color_fill = 'red';
	export let class_name = '';
    let clazz ;
    export { clazz as class }
</script>

<!-- <button class={color_fill}> -->
<button on:click class={` ${clazz || ''}`}>
	<MdLandscape />
</button>

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

    .icon:active
    {
        color: rgb(100,100,100);
        background-color: azure;
        border-radius: 45%;
        transition: 0.3s ease-in-out;
    }

</style>
