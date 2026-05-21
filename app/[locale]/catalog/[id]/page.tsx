import { products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductHeader from "@/components/product/ProductHeader";
import ProductSpecs from "@/components/product/ProductSpecs";
import ProductSuitableFor from "@/components/product/ProductSuitableFor";
import ProductPrices from "@/components/product/ProductPrices";
import ProductGrit from "@/components/product/ProductGrit";

export default async function ProductPage({
	params,
}: {
	params: { id: string; locale: string };
}) {
	const { id } = await params;
	const product1 = products.find((p) => p.id === id);

	// временный мок товара
	const product = {
		slug: "stone-150x25x3",
		name: {
			type: "Алмазный брусок",
			model: "KDTU Hybrid Bond",
			shortSpec: "150×25×3—300 grit",
		},
		images: [
			"https://kdtu.tech/ru/wp-content/uploads/sites/2/2025/06/Diam-60-40-150-25-3.jpg",
			"https://kdtu.tech/ru/wp-content/uploads/sites/2/2025/04/Diamond-60-40-150_25_1.png",
			"https://kdtu.tech/ru/wp-content/uploads/sites/2/2025/04/Diamond-3-2-150_25_1.png",
			"https://kdtu.tech/ru/wp-content/uploads/sites/2/2025/04/20-14.jpg",
		],
		shortDescription:
			"Алмазный брусок на гибридной связке для точной заточки ножей и инструмента. Обеспечивает высокую скорость съёма и чистую поверхность без глубоких рисок.",
		description:
			"Алмазный брусок KDTU Hybrid Bond 150×25×3 — это универсальный абразив для заточки ножей и инструмента. Гибридная связка обеспечивает высокую скорость съёма, стабильную работу и чистую риску без глубоких царапин. Подходит для сталей любой твёрдости, включая порошковые.",
		category: {
			name: "Заточка ножей",
			slug: "knife-sharpening",
		},
		subcategory: {
			name: "Алмазные бруски",
			slug: "diamond-stones",
		},
		specs: [
			{ label: "Размер", value: "150 × 25 × 3 мм" },
			{ label: "Абразив", value: "Алмаз" },
			{ label: "Связка", value: "Hybrid Bond" },
			{ label: "Зернистость", value: "300 grit (60/40)" },
			// { label: "Назначение", value: "Для ножей и инструмента" },
		],
		advantages: [
			"Высокая производительность съёма",
			"Долговечная гибридная связка",
			"Ровная геометрия по всей поверхности",
			"Чистая и контролируемая рисочная структура",
			"Работает всухую или с водой",
		],
		suitableFor: [
			"Кухонные ножи",
			"Туристические ножи",
			"Стамески",
			"Режущий инструмент",
			"Твёрдые порошковые стали (M390, S90V, Elmax)",
		],
		result: [
			"Быстрый съём металла",
			"Чистая фаска без провалов",
			"Подготовка к финишным абразивам",
		],
	};

	if (!product) {
		return (
			<div className="container  mt-18 md:mt-25 lg:mt-35">
				<h2 className="text-3xl font-bold mb-4">Товар не найден</h2>
				<p className="opacity-70">Похоже, такого товара нет в каталоге</p>
			</div>
		);
	}

	return (
		<section className="container  mt-18 md:mt-25 lg:mt-35 ">
			<div>
				<div className="lg:flex lg:gap-8">
					<ProductGallery images={product.images} />
					<div className="mb-8">
						<ProductHeader
							name={product.name}
							shortDescription={product.shortDescription}
						/>
						<ProductPrices />
						<ProductGrit />
					</div>
				</div>
				<div className="md:grid md:grid-cols-2 md:gap-6">
					<ProductSpecs specs={product.specs} />
					<ProductSuitableFor suitableFor={product.suitableFor} />
				</div>
				{/* <div className="mt-6">
					<p className="text-gray-500 mb-6">{product.description}</p>

					<ul>
						{product.specs.map((item, i) => (
							<li key={i} className="flex justify-between">
								<span className="text-gray-500">{item.label}</span>
								<span className="">{item.value}</span>
							</li>
						))}
					</ul>
				</div> */}
			</div>
		</section>
	);
}
