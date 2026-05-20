import Image from "next/image";

import { products } from "@/data/products";

export default async function ProductPage({
	params,
}: {
	params: { id: string; locale: string };
}) {
	const { id } = await params;
	const product = products.find((p) => p.id === id);

	if (!product) {
		return (
			<div className="container">
				<h2 className="text-3xl font-bold mb-4">Товар не найден</h2>
				<p className="opacity-70">Похоже, такого товара нет в каталоге</p>
			</div>
		);
	}
	return (
		<section className="container">
			<div>
				<h2>{product.title}</h2>
			</div>
		</section>
	);
}
