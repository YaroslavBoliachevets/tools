export default function ProductSuitableFor({
	suitableFor,
}: {
	suitableFor: string[];
}) {
	return (
		<div className=" mb-8 bg-(--dark-background) text-(--light-text) px-6 py-4 rounded-2xl">
			<p className=" mb-2 text-[12px]  tracking-tight text-start text-(--color-primary) uppercase ">
				Застосування
			</p>
			<h3 className="text-xl  text-center">Підходить для</h3>
			<p className=" py-1 text-[11px] text-(--secondary-text)">
				300 grit — середня заточка. Універсальна зернистість для відновлення ріжучої
				кромки.
			</p>

			<ul className="w-full divide-y divide-gray-800 border border-gray-800 rounded-xl overflow-hidden  ">
				{suitableFor.map((item, i) => (
					<li
						key={i}
						className="flex justify-between px-4 py-3 items-center text-sm md:text-base hover:bg-gray-800"
					>
						<span className="text-(--light-text)">{item}</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-check h-4 w-4 text-primary"
							aria-hidden="true"
						>
							<path d="M20 6 9 17l-5-5"></path>
						</svg>
					</li>
				))}
			</ul>
		</div>
	);
}
