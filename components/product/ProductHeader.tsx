import { ProductName } from "@/types/Product";

export default function ProductHeader({
	name,
	shortDescription,
}: {
	name: ProductName;
	shortDescription: string;
}) {
	return (
		<div className="mb-4 sm:w-[85%] lg:w-full">
			<div>
				<h2 className="font-bold text-2xl md:text-3xl text-start">{name.type}</h2>
				<p className="font-bold text-2xl md:text-3xl text-start text-(--color-primary)">
					{name.model}
				</p>
				<p className="font-bold text-2xl md:text-3xl text-start">
					{name.shortSpec}
				</p>
			</div>

			{shortDescription && (
				<p className="mt-3 text-gray-500 leading-relaxed max-w-2xl">
					{shortDescription}
				</p>
			)}
		</div>
	);
}
