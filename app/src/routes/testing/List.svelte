<script>
	let numbers = [1, 2, 3, 4];
	let add = true;
	export let game_status = false;
	function toggle_add() {
		add = !add;
	}

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}
	function substractNumber() {
		numbers.pop();
		numbers = [...numbers];
	}
	$: game_status = numbers.length >= 10;
	$: sum = numbers.reduce((a, b) => a + b, 0);
</script>

<p>Keep adding numbers to win!</p>
<p>
	{numbers.join(' + ')} = {sum}
</p>
<p>Current value of add is {add}</p>
<p>Current value of game_status is {game_status}</p>

{#if add}
	<p>There are {numbers.length} numbers</p>
	<button on:click={addNumber}>Add a number</button>
{:else}
	{#if numbers.length <= 1}
		<p>Too little numbers!</p>
	{:else}
		<p>There are {numbers.length} numbers</p>
	{/if}

	<button on:click={substractNumber}>Remove a number</button>
{/if}
<button on:click={() => toggle_add()}>Toggle add/remove</button>
