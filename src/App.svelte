<script>
	import "./styles/main.scss";
	import "./styles/Form.scss";
	import convert from "./functions/convert";
	import { formdata } from "./stores.js";
	import Input from "./components/Input.svelte";
</script>

<main>
	<form on:keyup={convert}>
		<h1>Number Converter</h1>
		{#each Object.keys($formdata) as type}
			<Input {type} />
		{/each}
	</form>
</main>
