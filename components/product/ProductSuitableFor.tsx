export default function ProductSuitableFor({
	suitableFor,
}: {
	suitableFor: string[];
}) {
	return (
		<div className=" mb-8">
			<h2 className="text-xl mb-4 text-center">Подходит для</h2>
			<ul className="space-y-2 m-auto md:max-w-[390px]">
				{suitableFor.map((item, i) => (
					<li key={i}>
						<span className="text-(--color-primary)">•</span>
						<span className="text-gray-700">{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
