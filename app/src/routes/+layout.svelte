<script>
	import '../app.postcss';
	import '../app.css';
</script>

<div class="app">
	<!-- <Header /> -->
        <!-- This is where the acutual page goes -->
        <slot />
</div>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: roboto;
	}
    /* .app {
        min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
    } */

</style>
