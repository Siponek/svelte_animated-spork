<script>
	import MdLayers from 'svelte-icons/md/MdLayers.svelte';
	export let padding = 'p-36 ';
	export let color_fill = 'red';
	export let class_name = '';
</script>

<!-- <button class={color_fill}> -->
<button on:click class="{class_name} {padding} {color_fill}">
	<MdLayers />
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
	.user-icon {
		bottom: -70vh;
	}
</style>
