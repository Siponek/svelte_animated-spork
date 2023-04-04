import { fail, redirect } from '@sveltejs/kit';
// import { cookies_store, current_user } from '$lib/store.js';
// import { getMyCustomStore } from '$lib/store.js';
// @ts-ignore
import * as api from '$lib/Api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(302, '/map_page');
}
// const cookies_store_server = getMyCustomStore('cookies_store');
// const user_store_server = getMyCustomStore('current_user');
/** @type {import('./$types').Actions} */

export const actions = {
	login: async ({ cookies, request }) => {
		const json_payload = Object.fromEntries(await request.formData());
		const { headers, body } = await api.post('auth/api/login', json_payload);
		if (body.errors) {
			return fail(401, body);
		}

		const setCookieHeader = headers.get('Set-Cookie');
		if (setCookieHeader) {
		  const cookieParts = setCookieHeader.split(';');
		  const cookieValue = cookieParts.shift();
	
		  cookies.set('login_cookie', cookieValue, {
			httpOnly: false, // cookie is inaccessible to JavaScript
			sameSite: 'strict', // disallows cross-site usage of cookies
			path: '/', // cookies is accessible to all pages of your application
		  });
		}

		throw redirect(303, '/map_page');
	}
};
