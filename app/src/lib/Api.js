import { error } from '@sveltejs/kit';
import { loadEnv } from 'vite';

//const base = 'http://127.0.0.1:8000/app_ets';
const base = 'http://135.181.209.141:8000/app_ets';

// get that from env

async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		// credentials: "same-origin"
		opts.credentials = 'same-origin';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}
	console.log('sending opts:');
	console.log(opts);
	console.log(`fetching ${base}/${path}`);
	const res = await fetch(`${base}/${path}`, opts);
	console.log('fetching done');
	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}
	console.log('error in api.js');
	throw error(res.status, res.statusText, res.text);
}

export function get(path, token) {
	console.log('Api.js get called');
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	console.log('Api.js del called');
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	console.log('Api.js post called');
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	console.log('Api.js put called');
	return send({ method: 'PUT', path, data, token });
}
