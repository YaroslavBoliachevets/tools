import { getDictionary } from "@/lib/i18n/get-dictionary";
import { t } from "@/lib/i18n";

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
		// <section className="container py-20">
		// 	<h1 className="text-4xl font-bold">{t(dict, "hero.title")}</h1>

		// 	<p className="text-lg mt-4">{t(dict, "hero.subtitle")}</p>
		// </section>
		<></>
	);
}
