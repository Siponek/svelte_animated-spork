<script>
	import { goto } from '$app/navigation';
    import * as api from '$lib/Api.js';

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
        gap:15px;
        margin:15px;
        height:100vh;
        width:100%;
    }
    form{
        display:flex;
        flex-flow:column;
        margin:35px;
        gap:35px;
        text-align:center;
    }
    input{
        height:50px;
        width:500px;
        border-radius:15px;
        border:1px solid green;
        color:black;
    }
    h1, a{
        font-weight:700;
        color:black;
    }
    button{
        font-weight:700;
        background-color:white;
        color:black;
        height:50px;
        width:50%;
        border-radius:15px;
        border:2px solid black;
    }
    .inputs{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-flow: column;
        align-items: center;
    }

</style>
<div class="loginForm">
    <h1>Non hai ancora un'account, puoi registrarti da qua</h1>
    <a href="/register">Registrati da qua</a>
    <form on:submit|preventDefault={handleLogin}>
        <div class="inputs">
            <label for="email">email</label>
            <input type="email" bind:value={email} placeholder="email"/>
            <label for="password">password</label>
            <input type="password" bind:value={password} placeholder="password"/>
        </div>

        <div class="btn">
            <button type="submit">Login</button>
        </div>

     </form>
</div>
