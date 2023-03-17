<script lang="ts">
	// import 'bootstrap/dist/css/bootstrap.min.css';
	// import { Styles, Container, Col, Row } from 'sveltestrap';
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
	// /** @type {import('./$types').ActionData} */
	export let form: any;
</script>

<svelte:head>
	<title>ETS - Login</title>
	<!-- <Styles /> -->
</svelte:head>

<ListErrors errors={form?.errors} />
<div class="auth-page">
	<div class="container py-10 px-10 mx-0 min-w-full flex flex-auto  justify-center items-center">
		<div class="row">
			<div class="">
				<h1 class="text-lg">Sign In form</h1>
				<p class="text-xs-center">
					<a href="/register">Need an account?</a>
				</p>

				<ListErrors errors={form?.errors} />

				<form use:enhance method="POST" action="?/login">
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							name="email"
							type="email"
							required
							placeholder="Email"
							value="asdf_test1@wololo.com"
						/>
					</fieldset>
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							name="password"
							type="password"
							required
							placeholder="Password"
							value="asdf_test1"
						/>
					</fieldset>
					<button
						class="w-full max-w-xs bg-slate-500 hover:bg-slate-300 hover:ease-in hover:duration-300  text-white font-bold py-2 px-4 rounded"
						type="submit"
						>Sign in
					</button>
					<!-- <a class="btn" href="/signup">Sign Up</a> -->
				</form>
			</div>
		</div>
	</div>
</div>
