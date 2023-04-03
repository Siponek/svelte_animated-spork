<script>
	// import MdLayers from 'svelte-icons/md/MdLayers.svelte';
	import LayerButton from '$lib/LayerToggleIcon.svelte';
    import RegionButton from '$lib/RegionToggleIcon.svelte';
    import UserButton from '$lib/UserIcon.svelte';
    import Menu from '$lib/Menu.svelte'
	import { icon_layer_status, region_layer_status, user_status, user_register_status } from '$lib/store.js';
	import UserRegisterIcon from './UserRegisterIcon.svelte';
   // import UserPopup from '$lib/userNotifications/userPopup.svelte';

	function toggle_store_layer(store_boolean) {
		console.log('Sidebad button: toggling store layer');
		store_boolean.update((n) => !n);
	}

	const btn_status = new Array(4).fill(false);
	let userPopupStatus = false;
</script>

 <aside class=" rounded-r-lg content-center relative object-none staticSidebar">
    <Menu/>
         <LayerButton class ="p-1 icon fill-ets-blue {btn_status[0] ? 'selected' : ''}"  on:click={() => {
            toggle_store_layer(icon_layer_status);
            btn_status[0] = !btn_status[0];
        }
        }  />
        <RegionButton class ="p-1 icon fill-ets-blue  {btn_status[1] ? 'selected' : ''}" on:click={() => {
            toggle_store_layer(region_layer_status);
            btn_status[1] = !btn_status[1];
        }
        }  />
        <!-- <UserButton class ="p-1 icon user-icon text-green-600  {btn_status[2] ? 'selected' : ''}" on:click={() => {
        toggle_store_layer(user_status)
        btn_status[2] = !btn_status[2];
    }
    }  />
    <UserRegisterIcon class ="p-1 icon user-register-icon text-green-600  {btn_status[3] ? 'selected' : ''}" on:click={() => {
        toggle_store_layer(user_register_status)
        btn_status[3] = !btn_status[3];
    } }/> -->

<!--
<aside class=" rounded-r-lg content-center relative object-none ">
	<LayerButton
		class="p-1 icon fill-ets-blue {btn_status[0] ? 'selected' : ''}"
		on:click={() => {
			toggle_store_layer(icon_layer_status);
			btn_status[0] = !btn_status[0];
		}}
	/>
	<RegionButton
		class="p-1 icon fill-ets-blue  {btn_status[1] ? 'selected' : ''}"
		on:click={() => {
			toggle_store_layer(region_layer_status);
			btn_status[1] = !btn_status[1];
		}}
	/>
    <Menu/>

<div>
		<UserButton
			class="p-1 icon user-icon  {btn_status[2] ? 'selected' : ''}"
			on:click={() => {
				btn_status[4] = !btn_status[4];
			}}
			bind:popupVisible={userPopupStatus}
		/>
		<UserPopup bind:userPopupStatus />
	</div>
-->
</aside>

<style>

	:global(button.icon) {
        width:95px;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	/* hover */
	:global(button.icon:hover) {
		background-color: azure;
		border-radius: 45%;
		transition: 0.3s ease-in-out;
		color: rgb(80, 80, 80);
	}
	:global(buttonicon:target) {
		color: rgb(80, 80, 80);
		background-color: azure;
		border-radius: 45%;
		transition: 0.3s ease-in-out;
	}

	:global(button.user-icon) {
		bottom: -70vh;
	}
	:global(button.selected) {
		background-color: azure;
		color: rgb(20, 106, 181);
		transition: 0.1s ease-in-out;
	}
</style>
