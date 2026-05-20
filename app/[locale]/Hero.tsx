import { Dictionary } from "@/types/dictionary";

export default function Hero({ dict }: { dict: Dictionary }) {
	return (
		<section
			className="relative top-0 w-full h-screen bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url(/img/main-bg.webp)" }}
		>
			<div className="container h-full flex justify-center items-center">
				<h1 className="text-(--color-light) text-2xl text-center w-[350px] h-[70vh] flex items-center justify-center md:w-[500px] lg:w-[700px]">
					{dict.hero.title}
				</h1>
			</div>
		</section>
	);
}
