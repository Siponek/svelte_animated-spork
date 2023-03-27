import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/Api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
	const { user } = await parent();
	if (user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ cookies, request }) => {
		const data = await request.formData();
		const form_data = {
			username: data.get('username'),
			email: data.get('email'),
			password: data.get('password'),
			first_name: data.get('first_name'),
			last_name: data.get('last_name')
		};
		const json_payload = form_data;
		console.log('action register called, calling api.js');
		const body = await api.post('auth/api/register', json_payload);

		if (body.errors) {
			return fail(401, body);
		}

		const value = btoa(JSON.stringify(body.user));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/map_page');
	}
};
