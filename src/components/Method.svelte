<script>
	export let no = "";
	export let type = "";
	const hexacodes = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

	$: chars = no.toString().split("").reverse();
	$: multi = (
		type == "binary" ? 2 : type == "octal" ? 8 : type == "hexadecimal" ? 16 : 10
	).toString();
</script>

<article>
	<p>
		{#if no.length == 0}
			...
		{:else}
			{#each chars as char, i}
				{#if char !== "0"}
					{#if type == "hexadecimal" && Object.keys(hexacodes).includes(char.toLowerCase())}
						{hexacodes[char.toLowerCase()]}
					{:else}
						{char}
					{/if}
					&times; {multi}<sup>{i}</sup>
					{#if chars.length - 1 !== i && chars[chars.length - 1] !== "0"}
						+ {" "}
					{/if}
				{/if}
			{/each}
		{/if}
	</p>
</article>
