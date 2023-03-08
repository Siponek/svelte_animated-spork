<script>
	import { colors, district } from '$lib/store';
</script>

<div class="grid grid-cols-6">
	{#each $colors as color, index}
		<label class="py-2 text-center text-slate-500" style="background-color: {color};">
			<input type="radio" name="ditrict" value={index + 1} checked />{index + 1}
		</label>
	{/each}
	<!-- <label class="bg-slate-300 py-2 text-center">
		<input type="radio" name="ditrict" value="2" />1
	</label>
	<label class="bg-slate-400 py-2 text-center">
		<input type="radio" name="ditrict" value="3" />1
	</label> -->
</div>
