import { formdata } from "../stores";
import validate from "./validate";

let form;
formdata.subscribe((data) => (form = data));
export default function (e) {
	const { value, name } = e.target;

	if (e.target.value == 0)
		return formdata.set({ binary: "", octal: "", decimal: "", hexadecimal: "" });
	if (!validate(value, name)) return;

	let data = { ...form };

	data.decimal = (
		name == "binary"
			? parseInt(form.binary, 2)
			: name == "octal"
			? parseInt(form.octal, 8)
			: name == "hexadecimal"
			? parseInt(form.hexadecimal, 16)
			: value
	).toString();

	data.binary = parseInt(data.decimal).toString(2);
	data.octal = parseInt(data.decimal).toString(8);
	data.hexadecimal = parseInt(data.decimal).toString(16);
	formdata.set(data);
}
