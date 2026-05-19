"use client";
import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/types/dictionary";

import LanguageSwitcher from "./LanguageSwitcher";
import Navigation from "./Navigation";

export default function Header({ dict }: { dict: Dictionary }) {
	return (
		<header
			className="relative w-full h-screen bg-cover bg-center bg-no-repeat py-2 md:py-4 lg:py-5"
			style={{ backgroundImage: "url(/img/main-bg.webp)" }}
		>
			<nav className="container grid grid-cols-3 items-center">
				<div className="flex items-center justify-start">
					<LanguageSwitcher />
				</div>
				<Link href="/ru" className="flex items-center justify-center ">
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
				<div className="text-(--color-light) flex items-center justify-end">
					<Navigation dict={dict} />
				</div>
			</nav>
			<section>
				<div className="container flex justify-center">
					<h1 className="text-(--color-light) text-2xl text-center w-[350px] h-[70vh] flex items-center justify-center md:w-[500px] lg:w-[700px]">
						{dict.hero.title}
					</h1>
				</div>
			</section>
		</header>
	);
}
