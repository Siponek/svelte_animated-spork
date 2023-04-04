<script lang="ts">
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
	// /** @type {import('./$types').ActionData} */
	import logo from "$lib/images/bshape.png";
    export let form:any;
</script>

<svelte:head>
	<title>ETS - Login</title>
</svelte:head>

<div class="auth-page container mx-auto place-items-center bg-slate-500">

	<img src={logo} class="justify-center w-14 display: block" alt="ETS logo"  />

	<div class=" p-10 flex justify-center  h-screen ">
		<div class="row">
			<div class="">
				<h1 class="text-lg">Sign In form</h1>
				<p
					class="text-xs-center  hover:bg-sky-700 hover:rounded hover:text-blue-100 duration-150"
				>
					<a href="/register">Need an account?</a>
				</p>
				<ListErrors errors={form?.errors} />
				<form use:enhance method="POST" action="?/login" class="text-slate-900">
					<fieldset class="form-group py-1">
						<input
							class="form-control form-control-lg"
							name="email"
							type="email"
							required
							placeholder="Email"
							value="test@mercedes.it"
						/>
					</fieldset>
					<fieldset class="form-group py-1">
						<input
							class="form-control form-control-lg"
							name="password"
							type="password"
							required
							placeholder="Password"
							value="lazypasssword"
						/>
					</fieldset>
					<button
						class="w-full max-w-xs bg-slate-800  hover:bg-sky-700 hover:ease-in-out hover:duration-300 hover:text-blue-100  text-white font-bold py-2 px-4 rounded"
						type="submit"
						>Sign in
					</button>
					<!-- <a class="btn" href="/signup">Sign Up</a> -->
				</form>
			</div>
		</div>
	</div>
</div>
