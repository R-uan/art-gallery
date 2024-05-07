export interface IArtist {
	slug: string;
	name: string;
	movement: string;
	date_of_birth: string;
	country_of_birth: string;
	date_of_death: string | null;
}

export interface IPartialArtist {
	name: string;
	slug: string;
}
