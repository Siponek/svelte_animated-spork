<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
<h1>This a custom error page at map_page/+error.svelte</h1>
