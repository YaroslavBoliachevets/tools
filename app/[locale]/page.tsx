import { getDictionary } from "@/lib/i18n/get-dictionary";
import Hero from "./Hero";

export default async function HomePage({ params }: { params: any }) {
	const resolvedParams = await params;

	const locale = resolvedParams?.locale ?? params?.locale;

	if (!locale) {
		throw new Error(
			"No locale in params: " + JSON.stringify({ params, resolvedParams }),
		);
	}

	const dict = await getDictionary(locale);
	return (
		<>
			<Hero dict={dict} />
		</>
	);
}
