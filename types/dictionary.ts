export interface Dictionary {
	hero: { title: string };
	navigation: { main: string; company: string; tools: string; contacts: string };
	footer: {
		addressTitle: string;
		address: {
			postalCode: string;
			region: string;
			city: string;
			street: string;
		};

		contactsTitle: string;
		contacts: {
			phone: string;
			email: string;
		};

		socialTitle: string;

		productsTitle: string;
		products: {
			woodTools: string;
			industrialTools: string;
			pastes: string;
			bars: string;
			catalog: string;
		};

		infoTitle: string;
		info: {
			delivery: string;
			warranty: string;
			privacy: string;
			maps: string;
		};
	};
	barsSection: {
		title: string;
		subtitle: string;
	};
}
