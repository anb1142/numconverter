import { writable } from "svelte/store";
export let formdata = writable({ binary: "", octal: "", decimal: "", hexadecimal: "" });
