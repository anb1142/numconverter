let allowed = {
	binary: "01",
	octal: "01234567",
	decimal: "0123456789",
	hexadecimal: "0123456789ABCDEF",
};

export default function (value, type) {
	for (let char of value.split("")) if (!allowed[type].includes(char.toUpperCase())) return false;
	return true;
}
