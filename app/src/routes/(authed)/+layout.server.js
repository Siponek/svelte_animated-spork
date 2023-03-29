import { redirect } from '@sveltejs/kit';

// This prevents acces to the page if the user is not logged in

export function load({ cookies, url }) {
	/*
	if (!cookies.get('app_ets_session')) {
		throw redirect(307, `/login?redirectTo=${url.pathname}`);
	}
    */
}
