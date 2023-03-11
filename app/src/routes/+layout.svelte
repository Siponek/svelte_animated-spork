<script>
	import '../app.postcss';
	import '../app.css';
	// These are bootstrap components
	// import { Styles, Container, Col, Row } from 'sveltestrap';
</script>

<div class="app">
	<!-- These are bootstrap styles -->
	<!-- <Styles /> -->

	<!-- <Header /> -->
	<main>
		<slot />
	</main>
	<form method="POST" action="/login">
		<!-- content -->
	</form>
</div>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: roboto;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
	/* @import '@fontsource/fira-mono'; */

	/* :root {
		--font-body: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		--font-mono: 'Fira Mono', monospace;
		--color-bg-0: rgb(202, 216, 228);
		--color-bg-1: hsl(209, 36%, 86%);
		--color-bg-2: hsl(224, 44%, 95%);
		--color-theme-1: #ff3e00;
		--color-theme-2: #4075a6;
		--color-text: rgba(0, 0, 0, 0.7);
		--column-width: 42rem;
		--column-margin-top: 4rem;
		font-family: var(--font-body);
		color: var(--color-text);
	} */
</style>
