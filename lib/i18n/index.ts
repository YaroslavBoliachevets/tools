export function t(dict: any, path: string): string {
	return path.split(".").reduce((acc, key) => acc?.[key], dict) || "";
}
