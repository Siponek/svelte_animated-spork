// import type { Actions } from './$types';
// import { fail, redirect } from '@sveltejs/kit';

// export const actions = {
//     login: async ({ cookies, request, url }) => {
//         const data = await request.formData();
//         const email = data.get('email');
//         const password = data.get('password');

//         // const user = await db.getUser(email);
//         // if (!user) {
//         //   return fail(400, { email, missing: true });
//         // }

//         // if (user.password !== hash(password)) {
//         //   return fail(400, { email, incorrect: true });
//         // }

//         // cookies.set('sessionid', await db.createSession(user));

//         //     if (url.searchParams.has('redirectTo')) {
//         //         throw redirect(303, url.searchParams.get('redirectTo'));
//         //     }
//         console.log('login');
//         return { success: true };
//       },
//       register: async (event) => {
//         // TODO register the user
//       }
// } satisfies Actions;

import { fail, redirect } from '@sveltejs/kit';
// @ts-ignore
import * as api from '$lib/Api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const body = await api.post('users/login', {
			user: {
				email: data.get('email'),
				password: data.get('password')
			}
		});

		if (body.errors) {
			return fail(401, body);
		}

		const value = btoa(JSON.stringify(body.user));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/');
	}
};