export default function ProductHelpInfo() {
	return (
		<>
			<ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
				<li
					className="flex items-center gap-3 bg-(--dark-background) text-(--light-text) px-4 py-3 rounded-xl 
                  border border-(--dark-border) transition-all duration-200
                  hover:shadow-lg hover:-translate-y-[2px] hover:border-(--color-primary)"
				>
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
						className="lucide lucide-truck h-4 w-4 text-primary shrink-0"
						aria-hidden="true"
					>
						<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
						<path d="M15 18H9"></path>
						<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
						<circle cx="17" cy="18" r="2"></circle>
						<circle cx="7" cy="18" r="2"></circle>
					</svg>
					<span className="font-medium text-[11px]">Відправка 1–2 дні</span>
				</li>

				<li
					className="flex items-center gap-3 bg-(--dark-background) text-(--light-text) px-4 py-3 rounded-xl 
                  border border-(--dark-border) transition-all duration-200
                  hover:shadow-lg hover:-translate-y-[2px] hover:border-(--color-primary)"
				>
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
						className="lucide lucide-award h-4 w-4 text-primary shrink-0"
						aria-hidden="true"
					>
						<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
						<circle cx="12" cy="8" r="6"></circle>
					</svg>
					<span className="font-medium text-[11px]">Сертифікат якості</span>
				</li>

				<li
					className="flex items-center gap-3 bg-(--dark-background) text-(--light-text) px-4 py-3 rounded-xl 
                  border border-(--dark-border) transition-all duration-200
                  hover:shadow-lg hover:-translate-y-[2px] hover:border-(--color-primary)"
				>
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
						className="lucide lucide-headphones h-4 w-4 text-primary shrink-0"
						aria-hidden="true"
					>
						<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
					</svg>
					<span className="font-medium text-[11px]">Підбір зернистості</span>
				</li>
			</ul>
		</>
	);
}
