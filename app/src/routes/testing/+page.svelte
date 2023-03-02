<script lang="ts">
	import App from '$lib/App.svelte';
	import ListGame from './List.svelte';
	import EmojiAnimation from './Animation.svelte';
	$: win_status = false;
</script>

<svelte:head>
	<title>Testing</title>
	<meta name="description" content="About this app" />
</svelte:head>

<header>
	<App name={'Manuele'} />
</header>

<main>
	<ListGame bind:game_status={win_status} />
</main>

{#if win_status}
	<div>
		<h1>You won!</h1>
		<EmojiAnimation />
	</div>
{/if}
