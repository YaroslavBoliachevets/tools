"use client";
import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
	const [current, setCurrent] = useState(0);

	return (
		<div className="mb-8 justify-center md:flex md:gap-3">
			<div className="w-full m-auto sm:w-[390px] lg:w-[450px]  md:m-0 ">
				<img src={images[current]} alt="product" />
			</div>

			<div className="flex gap-3 justify-center md:flex-col lg:justify-start">
				{images.map((img, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						className={`cursor-pointer border rounded-lg ${current === i ? "border-(--color-primary)" : "border-gray-700"} w-16 h-16 sm:w-22 sm:h-22 lg:w-24 lg:h-24`}
					>
						<img src={img} alt="product" className="w-full h-full" />
					</button>
				))}
			</div>
		</div>
	);
}
