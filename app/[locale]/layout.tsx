import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "KDTU — Diamond Tools",
	description: "High‑quality diamond tools for your tasks",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { locale } = await params;
	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable} h-full`}
		>
			<body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
				<Header />
				<Hero />
				<main className="flex-1">{children}</main>
			</body>
		</html>
	);
}
