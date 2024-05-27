export interface IArtist {
	artistId: 0;
	name: string | null;
	slug: string | null;
	country: string | null;
	movement: string | null;
	biography: string | null;
	profession: string | null;
}

export interface IPartialArtist {
	artistId: number;
	name: string;
	slug: string;
}
