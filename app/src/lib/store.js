import { disableScrollHandling } from '$app/navigation';
import { writable, readable } from 'svelte/store';
// Stores are used to share data between components
export let district = writable(1);
export const colors = readable([
	'#FF0000',
	'#00FF00',
	'#0000FF',
	'#FFFF00',
	'#FF00FF',
	'#00FFFF',
	'#000000',
	'#FFFFFF'
]);

console.log('store.js loaded');
district.subscribe((value) => {
	console.log(`district changed to ${value}`);
});
