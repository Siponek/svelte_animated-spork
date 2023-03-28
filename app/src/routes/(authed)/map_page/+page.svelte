<script>
	import Navbar from '$lib/Navbar.svelte';
	import Main from '$lib/Main.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import StaticSidebar from '$lib/StaticSidebar.svelte';
	import LeafletMap from '$lib/LeafletMap.svelte';
    import {  user_status } from '$lib/store.js';
    import UserLogin from '$lib/UserLogin.svelte';
	import UserRegister from '$lib/UserRegister.svelte';
    let user = false
	let open = false;
    $: if($user_status) {
         user = true
       // console.log(user_status, 'user-status is set to true')
    }else{
        user = false
    }
    let userRegisterStatus = false
    $: if(user_register_status){
        userRegisterStatus = true
    }else{
        userRegisterStatus = false
    }
</script>

<!-- ICONS TI IMPORT FROM
https://svelte-icons-explorer.vercel.app/
 -->

<div class="grid">
	<div class="grid md:grid-cols-1">
		<!-- <Navbar bind:sidebar={open} /> -->
		<Sidebar bind:open />
	</div>
</div>
<div class="mx-auto ">
	<div class="flex flex-row ">
        <div class=" basis-2 "><StaticSidebar />
        </div>
        <!-- {#if userRegisterStatus === true}
        <div class="alignLogoMenu">
        <UserRegister/>
        </div>
        {/if} -->
        {#if user === true}
        <div class="alignLoginMenu">
        <UserLogin/>
        </div>
        {/if}
		<div id="" class=" basis-auto w-full"><LeafletMap />
        </div>
	</div>
</div>

<footer class="px-4 py-2  rounded-tl-full  shadow  dark:bg-gray-800 ">
	<p>Footer placeholder</p>
</footer>

<style lang="postcss">
	footer {
		margin-top: auto;
		height: 40px;
	}
    .alignLoginMenu{
    display: flex;
    justify-content: center;
    align-content: center;
}
	:global(body) {
		background-color: theme('colors.ets-grey');
		color: azure;
		padding: 0;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
