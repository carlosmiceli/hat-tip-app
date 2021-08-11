export type NodLink = {
	id: number;
	original: string;
	nod: string;
	reward: number;
	description: string;
	tipper: {
		id: number;
		name: string;
		lastName: string;
		profile: string;
	};
};

export type NodLinksList = NodLink[];
