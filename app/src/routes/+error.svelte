<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{$page.error.message}</title>
</svelte:head>
<div class=" text-center">
	<h1>Hello, this is the error page</h1>
	<p>Error: {$page.error.message}</p>
	<p>Go to index <a href="/">here</a></p>
</div>

<style>
	div {
		background-color: #f5f5f5;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		font-size: 1.2rem;
		line-height: 1.5;
		color: #333;
		margin: 0;
	}
</style>
