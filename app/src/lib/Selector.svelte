<script>
	import { colors, district } from '$lib/store';
</script>

<div class="grid grid-cols-6">
	{#each $colors as color, index}
		<label class="py-1 text-center text-slate-100" style="background-color: {color};">
			<input
				type="radio"
				name="ditrict"
				bind:group={$district}
				value={index + 1}
				checked
			/>{index + 1}
		</label>
	{/each}
</div>
