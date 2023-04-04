<script lang="js">
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
    import logo from '$lib/images/bshape.png';

	/** @type {import('./$types').ActionData} */
	export let data;
	export let form;
</script>

{#if form?.success}
	<p>Successfully registered in! Welcome back, {data.user.name}</p>
{/if}

<svelte:head>
	<title>Sign up • Conduit</title>
</svelte:head>

<div class="registrationForm bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-500 via-ets-grey to-ets-blue">
	
    <img src={logo} alt="bshape logo" class="logo">

    <h1> Sign Up </h1>
	<ListErrors errors={form?.errors} />

	<form use:enhance method="POST" action="?/register" class="Form">

		<div class="inputs">
			<label for="first_name"> First name </label>
			<input name="first_name" type="text" placeholder="Your First Name" required/>

			<label for="last_name"> Last name </label>
			<input name="last_name" type="text" placeholder="Your Last Name" required/>

			<label for="email"> Email </label>
			<input name="email"type="email" placeholder="Email" required />
			
			<label for="password"> Password </label>
			<input name="password" type="password" placeholder="Password" rquired />
		</div>

			<div class="submit">
				<button type="submit"> Sign up</button>
			</div>
	</form>
</div>

<style>
    .registrationForm{
        display:flex;
        flex-flow:column;
        justify-content: center;
        align-content: center;
        text-align: center;
		height: 100vh;
		color: white;
    }

    form {
		position: relative;
        display:flex;
        flex-flow:column;
        margin-inline:auto;
    }

    h1, a{
        font-weight:700;
        color:white;
    }

	p {
		margin-bottom: 2rem;
	}

    button {
        font-weight:700;
        background-color:rgba(0, 0, 0, 0.5);
        color:white;
        height:50px;
        width: 20rem;
        border-radius:15px;
    }

    .inputs {
        display: flex;
        flex-flow: column;
    }

    input {
        width: 30rem;
        height: 3rem;

        margin-bottom: 0.5rem;
        border-radius: 0.3rem;

        background-color: rgba(15, 15, 15, 0.35);
        border:0;
    }

	.submit button {
		display: block;
		margin-inline: auto;
	}

    .logo {
        margin-top: 2rem;
        display: block;
        width: 8rem;
        margin-inline: auto;
        margin-bottom: 1rem;
    }
</style>