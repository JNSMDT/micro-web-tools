<script lang="ts">
	import { onMount } from 'svelte';
	import { calculateTime } from '$lib/functions/time';
	let startTime: string = '00:00';
	let endTime: string = '00:00';

	let differnce: number;

	const calcHour = () => calculateTime(startTime, endTime);

	async function handleChange() {
		await setTimeout(() => {
			differnce = calcHour();
		});
	}

	onMount(() => {
		differnce = calcHour();
	});
</script>

<div id="time-calculator" class="time-calcullator">
	<label class="font-bold" for="startTime">Startzeit:</label>
	<input
		on:input={handleChange}
		bind:value={startTime}
		type="text"
		id="startTime"
		name="startTime"
		required
	/>
	<label for="endTime">Endzeit:</label>
	<input
		on:input={handleChange}
		bind:value={endTime}
		type="text"
		id="endTime"
		name="endTime"
		required
	/>
</div>

<h1>Difference between {startTime} and {endTime}: {differnce}</h1>
