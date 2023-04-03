<script>
    import * as api from '$lib/Api.js';
    export async function load({ locals }) {
	if (locals.user) throw redirect(302, '/map_page');
    }
    let email;
    let password;
    const handleLogin =  async (e)=>{
        e.preventDefault()
        email = e.target.elements.email.value;
        password = e.target.elements.password.value;
        const response = await api.post('auth/api/login', email, password);
        const { headers, body } = response;
        if (body.errors) {
			throw new Error('problem in retrieving the data')
		}
		console.log('User', body.user);
		cookies.set(headers.get('Set-Cookie'));
        throw redirect(303, '/map_page');

    }
</script>
<style>
    .loginForm{
        display:flex;
        flex-flow:column;
        justify-content: center;
        align-content: center;
        border:2px solid red;
        gap:15px;
        margin:5px;
        height:100vh;
        width:100%;
    }
    form{
        display:flex;
        flex-flow:column;
        gap:10px;
    }
    input{
        border-radius:15px;
        border:1px solid green;
        color:black;
    }
</style>
<div class="loginForm">
    <h3>Non hai ancora un'account, puoi registrarti da qua</h3>
    <a href="/register">Registrati da qua</a>
    <form on:submit|preventDefault={handleLogin}>
        <input type="text" bind:value={email} placeholder="email"/>
        <input type="password" bind:value={password} placeholder="password"/>
        <button type="submit">Login</button>
     </form>
</div>
