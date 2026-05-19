"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
	{
		code: "ru",
		label: "RU",
	},
	{ code: "en", label: "EN" },
	{ code: "uk", label: "UA" },
];

export default function LanguageSwitcher() {
	const pathname = usePathname();
	// console.log("pathname", pathname);
	const currentLocale = pathname.split("/")[1];
	const restOfPath = pathname.split("/").slice(2).join("/");
	// console.log("currentLocale", currentLocale);
	// console.log("restOfPath", restOfPath);

	return (
		<div className="text-(--color-light) flex gap-3 text-sm">
			{languages.map((lang) => (
				<Link
					key={lang.code}
					href={`/${lang.code}`}
					className={`transition ${currentLocale === lang.code ? "font-bold text-(--color-primary)" : "opacity-70 hover:opacity-100"}`}
				>
					{lang.label}
				</Link>
			))}
		</div>
	);
}
