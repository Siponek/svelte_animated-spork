<script>
	import '../app.postcss';
	import '../app.css';
</script>

<div class="app">
	<!-- <Header /> -->
	<main id="main-page-slot">
        <!-- This is where the acutual page goes -->
		<slot />
	</main>
</div>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: roboto;
	}
</style>
