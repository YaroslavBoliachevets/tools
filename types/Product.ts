export type ProductName = { type: string; model: string; shortSpec: string };

export type ProductCategory = {
	name: string;
	slug: string;
	advantages: string[];
	result: string[];
};

export type SpecsItem = { label: string; value: string };

export type Product = {
	slug: string;
	name: ProductName;
	images: string[];
	shortDescription: string;
	description: string;
	category: ProductCategory;
	subcategory: ProductCategory;
	specs: SpecsItem[];

	suitableFor: string[];
};
