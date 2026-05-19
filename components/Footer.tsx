"use client";
import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/types/dictionary";

export default function Footer({ dict }: { dict: Dictionary }) {
	const { footer } = dict;
	return (
		<footer className="bg-black text-(--color-light) pt-5 lg:pt-20 ">
			<div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
				<div className="">
					<Link href="/ru" className="flex justify-start pb-4">
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
					<div className="flex flex-col">
						<h3 className="font-bold">{footer.addressTitle}</h3>
						<address
							className="not-italic mb-4"
							itemScope
							itemType="https://schema.org/PostalAddress"
						>
							<span itemProp="postalCode">{footer.address.postalCode}</span>
							<br />
							<span itemProp="addressRegion">{footer.address.region}</span>,
							<span itemProp="addressLocality">{footer.address.city}</span>
							<br />
							<span itemProp="streetAddress">{footer.address.street}</span>
						</address>
					</div>
				</div>

				<div className="h-full">
					<h3 className="font-bold border-b border-(--color-primary)">
						{footer.contactsTitle}
					</h3>
					<ul className="">
						<li>
							<a href="tel:+380508898289">{footer.contacts.phone}</a>
						</li>
						<li>
							<a href="mailto:kdtu-1@ukr.net" className="underline">
								{footer.contacts.email}
							</a>
						</li>
					</ul>
					<ul className="flex gap-4 items-start mb-2">
						{/*  хардкод но меняет цвет */}

						<li>
							<div className="w-8 h-8  flex items-center justify-center">
								<svg
									className="w-6 h-6 text-white hover:text-(--color-primary) transition-colors"
									fill="currentColor"
									viewBox="0 0 32 32"
								>
									<path d="M16 0C7.2 0 0 7.2 0 16c0 3.1.9 6 2.6 8.5L2 32l7.7-2.5c2 1 4.2 1.5 6.3 1.5 8.8 0 16-7.2 16-16S24.8 0 16 0zm7.3 21.4c-.3.8-1.6 1.5-2.2 1.6-.6.1-1.3.1-2.1-.1-.5-.1-1.1-.3-1.9-.6-3.3-1.4-5.4-4.7-5.6-4.9-.2-.3-1.3-1.7-1.3-3.2 0-1.5.8-2.2 1.1-2.5.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .7.6.3.7 1 2.4 1.1 2.6.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.5-.6.7-.2.2-.4.4-.2.7.2.3 1 1.6 2.1 2.6 1.4 1.2 2.6 1.6 3 .8.2-.3.4-.5.6-.8.2-.3.4-.4.6-.3.2.1 1.5.7 2.6 1.2.4.2.6.3.7.5.1.2.1.6-.2 1.4z" />
								</svg>
							</div>
						</li>
						<li>
							<div className="w-8 h-8  flex items-center justify-center">
								<svg
									className="w-6 h-6 text-white hover:text-(--color-primary) transition-colors"
									fill="currentColor"
									viewBox="0 0 32 32"
								>
									<path d="M16 0C7.2 0 0 7.3 0 16c0 3 1 5.9 2.7 8.3L2 32l7.9-2.6c2 1 4.1 1.5 6.1 1.5 8.8 0 16-7.3 16-16S24.8 0 16 0zm0 29c-1.8 0-3.6-.5-5.2-1.3l-.4-.2-4.7 1.5 1.5-4.6-.3-.5C5.1 22.2 4.5 20.2 4.5 18c0-6.3 5.2-11.5 11.5-11.5S27.5 11.7 27.5 18 22.3 29 16 29zm7.1-8.2c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.3-.2.3-.4.5-.6.8-.4.8-1.6.4-3-.8-1.1-1-1.9-2.3-2.1-2.6-.2-.3 0-.5.2-.7.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.2-.6-.5-.6-.7-.6h-.7c-.3 0-.7.1-1 .4-.3.3-1.1 1-1.1 2.5 0 1.5 1.1 2.9 1.3 3.2.2.3 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.2.2-1.4-.1-.2-.3-.3-.7-.5z" />
								</svg>
							</div>
						</li>
						<li>
							<div className="w-8 h-8  flex items-center justify-center">
								<svg
									className="w-6 h-6 text-white hover:text-(--color-primary) transition-colors"
									fill="currentColor"
									viewBox="0 0 32 32"
								>
									<path d="M16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16S0 24.8 0 16 7.2 0 16 0zm7.7 9.1l-2.1 10.6s-.3.7-1.1.4l-4.8-3.8s5.3-4.8 5.5-5c.2-.2.1-.3.1-.3 0-.3-.4 0-.4 0l-7 4.4-2.9-1s-.4-.2-.5-.5c0-.3.5-.5.5-.5l11.6-4.5s1-.4 1 .3zm-5.1 8.7l-1.9 1.7s-.2.1-.3 0l.4-3.2 1.8 1.5z" />
								</svg>
							</div>
						</li>
					</ul>

					<div>
						<h3 className="">{footer.socialTitle}</h3>
						<ul className="flex gap-4 items-start">
							{/*  хардкод но меняет цвет */}

							<li>
								<div className="w-8 h-8  flex items-center justify-center">
									<svg
										className="w-6 h-6 text-white hover:text-(--color-primary) transition-colors"
										fill="currentColor"
										viewBox="0 0 32 32"
									>
										<path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
										<path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
										<path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
									</svg>
								</div>
							</li>
							<li>
								<div className="w-8 h-8  flex items-center justify-center">
									<svg
										className="w-6 h-6 text-white hover:text-(--color-primary) transition-colors"
										fill="currentColor"
										viewBox="0 0 32 32"
									>
										<path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
										<path d="M2 12h6v18h-6v-18z"></path>
										<path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
									</svg>
								</div>
							</li>
							<li>
								<div className="w-8 h-8  flex items-center justify-center">
									<svg
										className="w-8 h-8 text-white hover:text-(--color-primary) transition-colors"
										fill="currentColor"
										viewBox="0 0 32 32"
									>
										<path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
									</svg>
								</div>
							</li>
							<li>
								<div className="w-8 h-8  flex items-center justify-center">
									<svg
										className="w-6 h-6 text-white hover:text-(--color-primary) transition-colors"
										fill="currentColor"
										viewBox="0 0 32 32"
									>
										<path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
									</svg>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="h-full">
					<h3 className="border-b border-(--color-primary)">
						{footer.productsTitle}
					</h3>
					<ul>
						<li>
							<Link href="/">{footer.products.woodTools}</Link>
						</li>
						<li>
							<Link href="/">{footer.products.industrialTools}</Link>
						</li>
						<li>
							<Link href="/">{footer.products.pastes}</Link>
						</li>
						<li>
							<Link href="/">{footer.products.bars}</Link>
						</li>
						<li>
							<Link href="/">{footer.products.catalog}</Link>
						</li>
					</ul>
				</div>

				<div className="h-full">
					<h3 className="border-b border-(--color-primary)">{footer.infoTitle}</h3>
					<ul className="mb-4">
						<li>
							<Link href="/">{footer.info.delivery}</Link>
						</li>

						<li>
							<Link href="/">{footer.info.warranty}</Link>
						</li>
						<li>
							<Link href="/">{footer.info.privacy}</Link>
						</li>
						<li>
							<Link href="/">{footer.info.maps}</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="m-auto text-center py-5">
				<p>© 2026 KYOTO DIAMOND TOOLS UKRAINE </p>
			</div>
		</footer>
	);
}
