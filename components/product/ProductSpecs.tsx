type SpecItem = { label: string; value: string };

export default function ProductSpecs({ specs }: { specs: SpecItem[] }) {
	return (
		<div className=" mb-8">
			<h2 className="text-xl mb-4 text-center">Характеристики</h2>

			<ul className="divide-y divide-gray-800 border border-gray-800 rounded-lx overflow-hidden md:max-w-[390px] m-auto">
				{specs.map((item, i) => (
					<li
						key={i}
						className="grid grid-cols-2 px-4 py-3 items-center text-sm md:text-base hover:bg-gray-100"
					>
						<span className="text-gray-600">{item.label}</span>
						<span className="text-(--color-light">{item.value}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
