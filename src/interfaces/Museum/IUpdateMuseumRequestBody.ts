export default interface IUpdateMuseumRequestBody {
	name: string | null;
	slug: string | null;
	city: string | null;
	state: string | null;
	country: string | null;
	latitude: number | null;
	longitude: number | null;
}
