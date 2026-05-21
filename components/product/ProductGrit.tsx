"use client";

import { gritOptions } from "@/data/grits";
import { useEffect, useState } from "react";

export default function ProductGrit() {
	const [current, setCurrent] = useState(0);

	return (
		<div className=" mb-4 bg-(--color-background) px-4 py-2 border border-(--border-color) rounded-xl">
			<span className="text-gray-500">Зернистость</span>

			<div className="grid justify-end pb-2 sm:flex sm:gap-2">
				<span className="text-gray-500">Выбрано:</span>
				<span className="font-bold">{gritOptions[current].grit} grit</span>
				<span className="text-(--color-primary) font-medium">
					{gritOptions[current].label}
				</span>
			</div>

			<div>
				<ul className="grid gap-3 md:gap-6 lg:gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 pb-4">
					{gritOptions.map((option, i) => {
						const isActive = current === i;
						return (
							<li
								key={i}
								className={`group flex w-[100%] flex-col justify-center items-center bg-gray-50 border rounded-2xl hover:shadow-xl group-hover:text-(--color-primary)  ${isActive ? "border-(--color-primary) shadow-md" : "transition-all duration-200 ease-out"} `}
								onClick={() => {
									setCurrent(i);
								}}
							>
								<p
									className={`font-semibold   ${isActive ? "text-(--color-primary)" : "text-gray-600 group-hover:text-gray-800 "}  `}
								>
									{option.grit}
								</p>
								<p
									className={`text-[11px]  ${isActive ? "" : "text-gray-400 group-hover:text-gray-600"}`}
								>
									{option.microns}
								</p>
							</li>
						);
					})}
				</ul>
				<p className="text-[12px] text-gray-500">
					Усі 19 варіантів — від обдирки до дзеркального полірування. Не впевнені у
					виборі? Залиште заявку і майстер допоможе підібрати.
				</p>
			</div>
		</div>
	);
}
