<script lang="ts">
	import { onMount } from 'svelte';
	type Emoji = {
		character: string;
		x: number;
		y: number;
		r: number;
	};
	const characters: string[] = ['🥳', '🎉', '✨'];
	let confetti: Array<Emoji> = new Array(100)
		.fill(0)
		.map((_, i) => {
			return {
				character: characters[
					i %
						characters.length
				],
				x:
					Math.random() *
					100,
				y:
					-20 -
					Math.random() *
						100,
				r:
					0.1 +
					Math.random() *
						1
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame: number;
		function loop() {
			frame = requestAnimationFrame(loop);
			confetti = confetti.map((emoji) => {
				emoji.y +=
					0.7 *
					emoji.r;
				if (emoji.y > 120)
					emoji.y =
						-20;
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

{#each confetti as c}
	<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})"
		>{c.character}</span
	>
{/each}

<style>
	:global(body) {
		overflow: hidden;
	}

	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>
