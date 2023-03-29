import { error } from '@sveltejs/kit';
import { apiConfig } from '../apiConfig';
import { loadEnv } from 'vite';

//const base = 'http://127.0.0.1:8000/app_ets';
const base = 'http://135.181.209.141:8000/app_ets';

// get that from env

// TODO get that from env
const baseC = apiConfig.base;

async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.credentials = 'same-origin';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}
	apiConfig.debugMessages && console.log('api.js', method, path, data, token);
	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok || res.status === 422) {
		const text = await res.text();
		const response_obj = { headers: res.headers, body: JSON.parse(text) };
		return text ? response_obj : {};
	}
	if (apiConfig.debugMessages) {
		console.log('error in api.js');
		console.log(res.status);
		console.log(res.statusText);
		for (const [key, value] of res.headers.entries()) {
			console.log(`${key}: ${value}`);
		}
	}
	throw error(res.status, res.statusText, res.text);
}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
