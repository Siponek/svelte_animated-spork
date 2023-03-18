<script>
	import MdVerifiedUser from 'svelte-icons/md/MdVerifiedUser.svelte';
	export let padding = 'p-36 ';
	export let color_fill = 'red';
    export let color = 'fill-green-600';
    let clazz ;
    export { clazz as class }
</script>

<!-- <button class={color_fill}> -->
<button on:click class={` ${clazz || ''}`}>
	<MdVerifiedUser />
</button>

<style>
	.icon {
		width: 2.5rem;
		height: 2.5rem;
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
