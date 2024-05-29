export default interface IMuseum {
	museumId: number;
	name: string;
	slug: string;
	city: string;
	state: string | null;
	country: string;
	latitude: number;
	longitude: number;
}

export interface IPartialMuseum {
	museumId: number;
	name: string;
	slug: string;
	country: string;
}
