export const getCutString = (str: string | undefined, chars: number): string | null => {
	if (!str) return null;
	if (str.length <= chars) return str;
	return str.slice(0, chars) + "..."
}
