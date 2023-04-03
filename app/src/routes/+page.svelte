<script>
	import UserLogin from "$lib/UserLogin.svelte";
</script>
<svelte:head>
	<title>ETS - Index</title>
</svelte:head>
 <!-- <svelte:component this.src="login/+page.svelte" /> -->
<div class="page-wrapper bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-500 via-ets-grey to-ets-blue">
    <!-- <UserLogin /> -->
    <div class="p-5 h-screen items-center">
		<div class=" text-gray-100">
			 <h1 class="text-3xl">Hello, welcome to ETS index</h1>
			<p class="">You propably want to go to
            </p>
            <p class=" px-5 py-2 hover:text-indigo-300 underline hover:ease-in-out duration-300" >
                <a href="map_page"> map_page</a>
            </p>
            <p class="">Or
            </p>
            <p class=" px-5 py-2 hover:text-indigo-300 underline hover:ease-in-out duration-300" >
                <a href="login"> login</a>
            </p>

            <p class=" px-5 py-2 hover:text-indigo-300 underline hover:ease-in-out duration-300" >
                <a href="register"> register</a>
            </p>
		</div>
	</div>
</div>
