<script>
	import Method from "./Method.svelte";
	import { formdata } from "../stores";
	import validate from "../functions/validate";

	export let type = "";

	$: valid = validate($formdata[type], type);
</script>

<article>
	<input
		type="text"
		class:red={!valid}
		bind:value={$formdata[type]}
		name={type}
		id={type}
		placeholder={type}
	/>
	<Method no={$formdata[type]} {type} />
</article>
