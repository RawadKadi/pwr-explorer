export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text);
}

export function isAddress(text: string) {
	return text.length === 42 && text.startsWith('0x');
}

export function isHash(text: string) {
	return text.length === 66 && text.startsWith('0x');
}
