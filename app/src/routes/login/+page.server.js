import { fail, redirect } from '@sveltejs/kit';
// @ts-ignore
import * as api from '$lib/Api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}
// const customResponse = (status, success, message, data) => {
// 	if (success) {
// 		return {
// 			success: success,
// 			message: message,
// 			info: data
// 		};
// 	}
// 	return invalid(status, {
// 		success: success,
// 		message: message,
// 		info: data
// 	});
// };

/** @type {import('./$types').Actions} */

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const form_data = {
			email: data.get('email'),
			password: data.get('password')
		};
		const json_payload = form_data;
		console.log('action register called, calling api.js');
		const body = await api.post('auth/api/login', json_payload);
		console.log('api.js returned');
		if (body.errors) {
			return fail(401, body);
		}

		const value = btoa(JSON.stringify(body.user));
		// cookies.set('jwt', value, { path: '/' });
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, request.searchParams.get('redirectTo') ?? '/');
		// throw redirect(307, '/map_page');
	}

	/*
export const actions = {
	login: async ({ cookies, request }) => {
		const loginData = await request.formData();
		const email = loginData.get('email');
		const password = loginData.get('password');
		if (!email || !password) {
			return customResponse(400, false, 'Email and Password are required');
		}
		if (typeof email !== 'string' || typeof password !== 'string') {
			return customResponse(400, false, 'Enter a valid email and password.');
		}
		cookies.set('jwt', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict'
		});
		throw redirect(307, '/map_page');
	}
    */
};
