export default interface IPostMuseumRequestBody {
	name: string;
	slug: string;
	city: string;
	state: string;
	country: string;
	latitude: number | null;
	longitude: number | null;
}
