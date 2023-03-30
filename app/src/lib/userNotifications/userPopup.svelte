<script>
	// function makePopupVisible() {
	// 	const popup = document.getElementById('myPopup');
	// 	popup.classList.toggle('show');
	// }
	// import get from '$lib/Api.js';
	export let userPopupStatus = false;

	import { apiConfig } from '$lib/../config.js';
	import { error } from '@sveltejs/kit';
	import { loadEnv } from 'vite';

	// TODO get that from env
	const base = apiConfig.base;

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
</script>

<aside
	class=" absolute  p-2 w-48 bg-ets-blue  max-h-full box-content flex flex-col items-center  shadow-lg rounded-r-lg"
	class:userPopupStatus
>
	<p>Currently logged in as Mario</p>
	<button class="bg-ets-grey ">logout</button>
	<!-- <span class="popuptext" id="myPopup">Popup text...</span> -->
</aside>

<style>
	aside {
		left: -1000%;
		transition: left 0.3s ease-in-out;
		border: 0;
		z-index: 18;
		bottom: -60vh;
	}
	aside > button {
		color: white;
		padding: 8px;
		margin: 8px;
		text-align: center;

		font-size: 16px;
	}

	.userPopupStatus {
		left: 0;
	}
	/* Popup container */
	.popup {
		/* position: relative; */
		display: inline-block;
		cursor: pointer;
	}

	/* The actual popup (appears on top) */
	.popup .popuptext {
		visibility: hidden;
		width: 160px;
		background-color: #555;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 8px 0;
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -80px;
	}

	/* Popup arrow */
	.popup .popuptext::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #555 transparent transparent transparent;
	}

	/* Toggle this class when clicking on the popup container (hide and show the popup) */
	.popup .show {
		visibility: visible;
		-webkit-animation: fadeIn 1s;
		animation: fadeIn 1s;
	}

	/* Add animation (fade in the popup) */
	@-webkit-keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
