<script>
	import MdVerifiedUser from 'svelte-icons/md/MdVerifiedUser.svelte';
	// import * as api from '$lib/Api.js';
	let clazz;
	export let popupVisible = false;
	export { clazz as class };
	function togglePopup() {
		popupVisible = !popupVisible;
		console.log('popupVisible', popupVisible);
	}
</script>

<button on:click class={` ${clazz || ''}`} on:click={togglePopup}>
	<MdVerifiedUser />
</button>
