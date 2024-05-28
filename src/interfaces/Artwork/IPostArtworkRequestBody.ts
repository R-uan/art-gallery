export default interface IPostArtworkRequestBody {
	slug: string;
	title: string;
	imageURL: string;
	period: string;
	year: number;
	artistId: number;
	museumId: number;
	history: string;
}
