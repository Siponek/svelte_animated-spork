<script lang="js">
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
	/** @type {import('./$types').ActionData} */
	import { Styles, Container, Col, Row } from 'sveltestrap';
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
	<Styles />
</svelte:head>
<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Sign up</h1>
				<p class="text-xs-center">
					<a href="/login">Have an account?</a>
				</p>
				<ListErrors errors={form?.errors} />
				<!-- <form use:enhance method="POST"> -->
				<form use:enhance method="POST" action="?/register" class="form">
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							name="first_name"
							type="text"
							required
							placeholder="Your First Name"
                            value="asdf_test1"
						/>
					</fieldset>
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							name="last_name"
							type="text"
							required
							placeholder="Your Last Name"
							value="asdf_test1"
						/>
					</fieldset>
					<fieldset class="form-group">
						<input
							class="form-control form-control-lg"
							name="username"
							type="text"
							required
							placeholder="Your User Name"
							value="asdf_test1"
						/>
					</fieldset>
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
					<button class="btn btn-lg btn-primary pull-xs-right" type="submit"
						>Sign up</button
					>
				</form>
			</div>
		</div>
	</div>
</div>

<style>


</style>