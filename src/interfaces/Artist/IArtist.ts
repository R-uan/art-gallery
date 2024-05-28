export interface IArtist {
	artistId: number;
	name: string;
	slug: string;
	country: string;
	imageURL: string;
	movement: string;
	biography: string;
	profession: string;
}

export interface IPartialArtist {
	artistId: number;
	name: string;
	slug: string;
	imageURL: string;
}
