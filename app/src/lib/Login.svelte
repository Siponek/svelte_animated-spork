<script>
	import { goto } from '$app/navigation';
    import * as api from '$lib/Api.js';
    import logo from '$lib/images/bshape.png';

    export async function load({ locals }) {
	if (locals.user) throw redirect(302, '/map_page');
    }

    let email;
    let password;
    const handleLogin =  async (e, cookies)=>{
        e.preventDefault()
         let data = {
            email:email,
            password:password,
         }
        console.log('userdata', data)
        const response = await api.post('auth/api/login', data);
        const { headers, body } = await response;
        if (body.errors) {
			throw new Error('problem in retrieving the data')
		}
        if (cookies) {
			// cookies.set('app_ets_session', body.token);
			cookies.set(headers.get('Set-Cookie'));
		}
		// console.log('User', body.user);
        //throw redirect(303, '/map_page');
       // window.location.href= '/map_page';
       goto('/map_page')
    }
</script>

<style>
    .loginForm{
        display:flex;
        flex-flow:column;
        justify-content: center;
        align-content: center;
        text-align: center;
        margin-top: 3rem;
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
        width: 10rem;
        margin-inline: auto;
        margin-bottom: 1rem;
    }

</style>


<div class="loginForm">

    <img src={logo} alt="bshape logo" class="logo">
    <h1>Non hai ancora un'account, puoi registrarti da qua</h1>
    <a href="/register">Registrati da qua</a>

    <form on:submit|preventDefault={handleLogin}>
        <div class="inputs">

            <label for="email"> Email </label>
            <input type="email" bind:value={email} placeholder="email" required/>

            <label for="password"> Password </label>
            <input type="password" bind:value={password} placeholder="password"/>

        </div>

        <div class="login">
            <button type="submit">Login</button>
        </div>

     </form>
</div>
