"use client";
import Link from "next/link";
import { Dictionary } from "@/types/dictionary";
import { useState, useEffect, useRef } from "react";

export default function Navigation({
	dict,
	locale,
}: {
	dict: Dictionary;
	locale: string;
}) {
	const { navigation } = dict;
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};

		if (open) {
			document.addEventListener("mousedown", handleOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleOutside);
		};
	}, [open]);

	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className="relative" ref={menuRef}>
			<svg
				onClick={toggleMenu}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-white hover:text-(--color-primary) transition-colors duration-200 cursor-pointer"
			>
				<line x1="4" y1="6" x2="20" y2="6" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="18" x2="20" y2="18" />
			</svg>

			<div
				className={`absolute right-0 top-10 flex flex-col gap-4 bg-black/80 backdrop-blur-md p-6 rounded-lg text-(--color-light) min-w-[200px] duration-300  ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
			>
				<Link href={`/${locale}`}>{navigation.main}</Link>
				<Link href="/">{navigation.company}</Link>
				<Link href={`/${locale}/catalog`}>{navigation.tools}</Link>
				<Link href="/">{navigation.contacts}</Link>
			</div>
		</div>
	);
}
