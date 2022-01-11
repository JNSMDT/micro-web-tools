<script lang="ts">
	import { onMount } from 'svelte';
	import { calculateTime } from '$lib/functions/time';
	import TimeInput from '$components/inputs/TimeInput.svelte';
	let startTime: string = '00:00';
	let endTime: string = '00:00';

	let difference: string;

	const calcHour = () => calculateTime(startTime, endTime);

	async function handleInput() {
		setTimeout(() => {
			difference = calcHour();
		});
	}

	onMount(() => {
		difference = calcHour();
	});
</script>

<div id="time-calculator" class="time-calcullator">
	<TimeInput {handleInput} name="startTime" label="Anfagnszeit" bind:value={startTime} />
	<TimeInput {handleInput} name="endTime" label="Endzeit" bind:value={endTime} />
</div>

<h1>Difference between {startTime} and {endTime}: {difference}</h1>
