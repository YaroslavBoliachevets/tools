import "server-only";

export const dictionaries = {
	en: () => import("../../dictionaries/en.json").then((r) => r.default),
	ru: () => import("../../dictionaries/ru.json").then((r) => r.default),
	uk: () => import("../../dictionaries/uk.json").then((r) => r.default),
};

// export async function getDictionary(locale: string) {
// 	return dictionaries[locale as keyof typeof dictionaries]();
// }

export async function getDictionary(locale: string) {
	// console.log("locale getDictionary", locale);
	const fn = dictionaries[locale as keyof typeof dictionaries]();
	// console.log("fn getDictionary", fn);

	return fn;
}
