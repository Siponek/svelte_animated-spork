import { disableScrollHandling } from '$app/navigation';
import { writable, readable } from 'svelte/store';
// Stores are used to share data between components
export let district = writable(1);
export const colors = readable(['#7ca6b4', '#a1d6e2', '#d5e5e5', '#6b7f8c', '#4e4e4e', '#1DB6F2']);

export const status = writable('idle');

console.log('store.js loaded');
district.subscribe((value) => {
	console.log(`district changed to ${value}`);
});
status.subscribe((value) => {
	console.log(`status changed to ${value}`);
});
