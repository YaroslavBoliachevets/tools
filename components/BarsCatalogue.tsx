"use client";
import { Dictionary } from "@/types/dictionary";
import { products } from "@/data/products";

import BarCard from "./BarCard";

export default function BarsCatalogue({ dict }: { dict: Dictionary }) {
	const { barsSection } = dict;
	return (
		<section className="container m-auto py-10 ">
			<div className="mb-8">
				<h2 className="text-center text-3xl font-bold mb-8">{barsSection.title}</h2>
				<p className="text-center">{barsSection.subtitle}</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{products.map((product) => (
					<BarCard key={product.id} {...product} />
				))}
			</div>
		</section>
	);
}
