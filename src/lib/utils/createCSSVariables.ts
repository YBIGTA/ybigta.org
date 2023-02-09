type StyleObject = Record<string, number | string>;

export default function createCSSVariables(obj: StyleObject) {
	const cssVariables = Object.keys(obj).reduce((acc, key) => {
		acc += `--${key}: ${obj[key]};`;
		return acc;
	}, '');

	return cssVariables;
}
