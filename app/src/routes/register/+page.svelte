<script lang="js">
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
	/** @type {import('./$types').ActionData} */
	// import { Styles, Container, Col, Row } from 'sveltestrap';
	export let data;
	export let form;
</script>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
         response to a form submission. it will vanish if the user reloads -->
	<p>Successfully registered in! Welcome back, {data.user.name}</p>
{/if}
<svelte:head>
	<title>Sign up • Conduit</title>
	<!-- <Styles /> -->
</svelte:head>
<div class="auth-page container mx-auto place-items-center bg-slate-500">
	<div class="p-10 flex justify-center  h-screen">
		<div class="row">
			<div class="">
				<h1 class="text-lg">Sign up</h1>
				<p
					class="text-xs-center  hover:bg-sky-700 hover:rounded hover:text-blue-100 duration-150"
				>
					<a href="/login">Have an account?</a>
				</p>
				<ListErrors errors={form?.errors} />
				<!-- <form use:enhance method="POST"> -->

				<form use:enhance method="POST" action="?/register" class="text-slate-900">
					<fieldset class="form-group py-1">
						<input
							class="form-control form-control-lg  "
							name="first_name"
							type="text"
							required
							placeholder="Your First Name"
                            value="asdf_test1"
						/>
					</fieldset>
					<fieldset class="form-group py-1">
						<input
							class="form-control form-control-lg  "
							name="last_name"
							type="text"
							required
							placeholder="Your Last Name"
							value="asdf_test1"
						/>
					</fieldset>
					<fieldset class="form-group py-1">
						<input
							class="form-control form-control-lg  py-1"
							name="username"
							type="text"
							required
							placeholder="Your User Name"
							value="asdf_test1"
						/>
					</fieldset>
					<fieldset class="form-group py-1">
						<input
							class="form-control form-control-lg  py-1"
							name="email"
							type="email"
							required
							placeholder="Email"
							value="asdf_test1@wololo.com"
						/>
					</fieldset>
					<fieldset class="form-group ">
						<input
							class="form-control form-control-lg  "
							name="password"
							type="password"
							required
							placeholder="Password"
							value="asdf_test1"
						/>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right  py-1" type="submit"
						>Sign up</button
					>
				</form>
			</div>
		</div>
	</div>
</div>

<style>


</style>