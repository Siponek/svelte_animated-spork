import type { Handle } from '@sveltejs/kit';

// Hooks that are used with every call to backend
const handle : Handle = async ({ event, resolve }) => {
    const {headers} = event.request;
    const cookies = event.cookies.get('AuthorizationToken');
    // const cookies = request.cookies.get('app_ets_session');
    if(cookies){
        // Here is the logic to validate token and get user data
        const sessionUser = await event.locals.session.get(cookies);
        // const sessionUser = {
        //     "id": 1,
        // }
        headers.set('Authorization', `Bearer ${cookies}`);
        event.locals.user = sessionUser;

    }
    resolve(event);
    // return await resolve(event);
}