"use client";
import Image from "next/image";
import Link from "next/link";

import { BarCardTypes } from "@/types/BarCardType";

export default function BarCard({
	id,
	image,
	title,
	shortDescription,
	locale,
}: BarCardTypes) {
	return (
		<Link
			href={`/${locale}/catalog/${id}`}
			className="block rounded-lg bg-white/40 hover:bg-white/60 hover:scale-[1.05] hover:shadow-xl hover:shadow-(--color-primary)/20 transition-all duration-[1000ms] ease-in-out transform-gpu md:p-3 lg:p-3"
		>
			<div className="h-full">
				<div className=" relative w-full h-[250px] mb-3">
					<Image
						src={image}
						alt={title}
						fill
						className="object-contain"
						sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         25vw"
					/>
				</div>
				<div className="text-center">
					<p>{title}</p>
					<p className="text-sm opacity-70 mt-1">{shortDescription}</p>
				</div>
			</div>
		</Link>
	);
}
