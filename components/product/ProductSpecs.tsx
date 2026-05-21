type SpecItem = { label: string; value: string };

export default function ProductSpecs({ specs }: { specs: SpecItem[] }) {
	return (
		<div className=" mb-8 bg-(--dark-background) text-(--light-text) px-6 py-4 rounded-2xl">
			<p className=" mb-2 text-[12px]  tracking-tight text-start text-(--color-primary) uppercase ">
				Технические данные
			</p>
			<h3 className="text-xl   text-start">Характеристики</h3>
			<p className=" py-1 text-[11px] text-(--secondary-text)">
				Параметри бруска перевірені на лабораторному стенді KDTU. Кожна партія
				проходить контроль геометрії та однорідності зерна.
			</p>

			<ul className="w-full divide-y divide-gray-800 border border-gray-800 rounded-xl overflow-hidden  ">
				{specs.map((item, i) => (
					<li
						key={i}
						className="grid grid-cols-2 px-4 py-3 items-center text-sm md:text-base hover:bg-gray-800"
					>
						<span className="text-(--secondary-text)">{item.label}</span>
						<span className="text-(--color-light">{item.value}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
