import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const user = {
			username: data.get('username'),
			email: data.get('email'),
			password: data.get('password')
		};

		const body = await api.post('users', { user });

		if (body.errors) {
			return fail(401, body);
		}

		const value = btoa(JSON.stringify(body.user));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/');
	},
	register: async (event) => {
		const data = await event.request.formData();
		const user_register = {
			// {
			//     "email": "test@test.it",
			//     "username": "test",
			//     "password": "lazypasssword",
			//     "first_name": "Mario",
			//     "last_name": "Rossi"
			// }
			username: data.get('username'),
			email: data.get('email'),
			password: data.get('password'),
			first_name: data.get('first_name'),
			last_name: data.get('last_name')
		};
		const body = await api.post('users', { user_register });
		if (body.errors) {
			return fail(401, body);
		}
		// return {
		//     status: 200,
		//     body: body
		// };
		const value = btoa(JSON.stringify(body.user));
		cookies.set('jwt', value, { path: '/mirets_ui' });
		throw redirect(307, '/mirets_ui');
	}
};
