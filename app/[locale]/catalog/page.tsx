import { getDictionary } from "@/lib/i18n/get-dictionary";

import BarsCatalogue from "@/components/BarsCatalogue";

export default async function CatalogPage({
	params,
}: {
	params: { locale: string };
}) {
	const { locale } = await params;
	const dict = await getDictionary(locale);
	return (
		<section className="container mt-18 md:mt-25 lg:mt-35">
			<h1 className="text-3xl font-bold">{dict.catalog.catalogTitle}</h1>
			<BarsCatalogue dict={dict} locale={locale} />
		</section>
	);
}
