export type GritCategory =
	| "coarse" // грубая
	| "medium" // средняя
	| "fine" // тонкая
	| "polish"; // полировка

export interface GritOption {
	grit: number; // значение grit (60, 80, 15000…)
	microns: string; // диапазон в микронах "250–300 μm"
	category: GritCategory;
	label: string; // человекочитаемое название категории
}
