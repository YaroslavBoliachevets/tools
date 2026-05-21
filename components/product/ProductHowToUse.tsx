export default function ProductHowToUse() {
	return (
		<section className="mb-8 rounded-xl px-6 py-4 bg-(--dark-background) text-(--light-text)">
			<p className=" mb-2 text-[12px]  tracking-tight text-start text-(--color-primary) uppercase ">
				Як працювати
			</p>
			<h3 className="text-xl  text-start mb-3">
				Три кроки до бритвенної гостроти
			</h3>
			<ul className="grid md:grid-cols-3 gap-3">
				<li className="border border-(--dark-border) px-4 py-3 items-center  rounded-xl">
					<span className="text-[32px] text-(--primary-text)">01</span>
					<h3 className="font-bold text-(--light-text)">Подготовка</h3>
					<p className=" py-1 text-[11px] text-(--secondary-text)">
						Змочіть поверхню водою або краплею мінеральної олії. Закріпіть брусок на
						стійкій основі.
					</p>
				</li>
				<li className="border border-(--dark-border) px-4 py-3 items-center  rounded-xl">
					<span className="text-[32px] text-(--primary-text)">02</span>
					<h3 className="font-bold text-(--light-text)">Заточка</h3>
					<p className=" py-1 text-[11px] text-(--secondary-text)">
						Витримуйте кут 15–20°. Виконуйте плавні рухи від п'яти до носика леза з
						рівним натиском.
					</p>
				</li>
				<li className="border border-(--dark-border) px-4 py-3 items-center  rounded-xl">
					<span className="text-[32px] text-(--primary-text)">03</span>
					<h3 className="font-bold text-(--light-text)">Догляд</h3>
					<p className=" py-1 text-[11px] text-(--secondary-text)">
						Промивайте брусок під проточною водою. Зберігайте в сухому місці у
						фірмовому футлярі.
					</p>
				</li>
			</ul>
		</section>
	);
}
