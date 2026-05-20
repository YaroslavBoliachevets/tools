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
		<section>
			<h1 className="text-3xl font-bold mb-4">Каталог</h1>
			<BarsCatalogue dict={dict} locale={locale} />
		</section>
	);
}
