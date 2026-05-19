"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header
			className="relative w-full h-screen bg-cover bg-center bg-no-repeat py-2 md:py-4 lg:py-5"
			style={{ backgroundImage: "url(/img/main-bg.webp)" }}
		>
			<div className="container">
				<Link href="/" className="flex items-center justify-center gap-3">
					<Image
						src="/icons/logo-kdtu.svg"
						alt="KDTU Logo"
						width={120}
						height={40}
						priority
						className="h-auto 
						md:w-[150px] 
						lg:w-[180px]
						"
					/>
				</Link>
			</div>
			<section>
				<div className="container flex justify-center">
					<h1 className="text-(--color-light) text-2xl text-center w-[350px] h-[70vh] flex items-center justify-center md:w-[500px] lg:w-[700px]">
						КАЧЕСТВЕННЫЙ АЛМАЗНЫЙ ИНСТРУМЕНТ ДЛЯ РЕШЕНИЯ ВАШИХ ЗАДАЧ
					</h1>
				</div>
			</section>

			<nav>
				<Link href="/">Home</Link>
				<Link href="/">Catalog</Link>
				<Link href="/">About</Link>
			</nav>
		</header>
	);
}
