"use client";
import { Dictionary } from "@/types/dictionary";

import Link from "next/link";
import Image from "next/image";

import LanguageSwitcher from "./LanguageSwitcher";
import Navigation from "./Navigation";

export default function Header({
	dict,
	locale,
}: {
	dict: Dictionary;
	locale: string;
}) {
	return (
		<header className="fixed w-full top-0 left-0 z-50 py-2 md:py-4 lg:py-5 bg-black/30 backdrop-blur-sm ">
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
					<Navigation dict={dict} locale={locale} />
				</div>
			</nav>
		</header>
	);
}
