export default interface IMuseum {
	name: string;
	city: string;
	estate: string | null;
	country: string;
	latitude: number;
	longitude: number;
	slug: string;
}

export interface IPartialMuseum {
	museumId: number;
	name: string;
	country: string;
}
