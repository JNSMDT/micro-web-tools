<script lang="ts">
	export let name: string;
	export let label: string;
	export let handleInput: svelte.JSX.FormEventHandler<HTMLInputElement>;
	export let value: string;
</script>

<div class={`time-input ${$$props.class}`}>
	<label class="font-bold" for={name}>{label}</label>
	<input on:input={handleInput} bind:value type="text" id={name} {name} required />
</div>
