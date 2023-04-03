<script>
    import * as api from '$lib/Api.js';
    export async function load({ locals }) {
	if (locals.user) throw redirect(302, '/map_page');
    }
    let email;
    let password;
    const handleLogin =  async (e)=>{
        e.preventDefault()

        const formData = new FormData(e.target);
         email = formData.get('email');
         password = formData.get('password');
         const data = {
            email:email,
            password:password,
         }
        console.log('userdata', data)
        const response = await api.post('auth/api/login', data);
        const { headers, body } = await response;
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
        text-align: center;
        border:2px solid red;
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
    }
    input{
        height:50px;
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
</style>
<div class="loginForm">
    <h1>Non hai ancora un'account, puoi registrarti da qua</h1>
    <a href="/register">Registrati da qua</a>
    <form on:submit|preventDefault={handleLogin}>
        <input type="email" bind:value={email} placeholder="email"/>
        <input type="password" bind:value={password} placeholder="password"/>
        <div class="btn">
            <button type="submit">Login</button>
        </div>

     </form>
</div>
