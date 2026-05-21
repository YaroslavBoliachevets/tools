import { getDictionary } from "@/lib/i18n/get-dictionary";
import Hero from "./Hero";

export default async function HomePage({
	params,
}: {
	params: { locale: string };
}) {
	const { locale } = await params;

	if (!locale) {
		throw new Error("No locale in params: " + JSON.stringify({ params }));
	}

	const dict = await getDictionary(locale);
	// console.log("dict", dict);
	// console.log("locale", locale);
	return (
		<>
			<Hero dict={dict} />
		</>
	);
}
