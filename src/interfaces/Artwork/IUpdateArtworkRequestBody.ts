export interface UpdateArtworkRequestBody {
	slug: string | null;
	title: string | null;
	period: string | null;
	history: string | null;
	imageURL: string | null;
	year: number | null;
	artistId: number | null;
	museumId: number | null;
}
