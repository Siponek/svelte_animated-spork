<script lang="ts">
    import logo from '$lib/images/bshape.png';
    import ListErrors from '$lib/ListErrors.svelte';

    import { enhance } from '$app/forms';

    // /** @type {import('./$types').ActionData} */
    export let form:any;
</script>

<style>
    .loginForm{
        display:flex;
        flex-flow:column;
        justify-content: center;
        align-content: center;
        text-align: center;
        height: 100vh;
    }

    form{
        display:flex;
        flex-flow:column;
        margin:35px;
        gap:35px;
        margin-inline:auto;
    }

    h1, a{
        font-weight:700;
        color:white;
    }

    .login button {
        font-weight:700;
        background-color:rgba(0, 0, 0, 0.5);
        color:white;
        height:50px;
        width: 20rem;
        border-radius:15px;
    }

    .inputs{
        display: flex;
        flex-flow: column;
        color: white;
    }

    .inputs input {
        width: 30rem;
        height: 3rem;

        margin-bottom: 1.5rem;
        border-radius: 0.3rem;

        background-color: rgba(15, 15, 15, 0.35);
        border:0;
    }

    .logo {
        display: block;
        width: 8rem;
        margin-inline: auto;
        margin-bottom: 1rem;
    }

</style>


<div class="loginForm bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-500 via-ets-grey to-ets-blue">

    <img src={logo} alt="bshape logo" class="logo">
    <h1> Login </h1>

    <ListErrors errors={form?.errors} />
    <form use:enhance method="POST" action="?/login" class="text-slate-900">
        <div class="inputs">

            <label for="email"> Email </label>
            <fieldset> <input name="email" type="email" placeholder="email" value="test@mercedes.it" required/> </fieldset>

            <label for="password"> Password </label>
            <fieldset> <input name="password" type="password" placeholder="password" value="lazypasssword" required/> </fieldset>

        </div>

        <div class="login">
            <button type="submit">Login</button>
        </div>

    </form>
</div>
