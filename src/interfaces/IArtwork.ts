import { IPartialArtist } from "./IArtist";
import { IPartialMuseum } from "./IMuseum";

export interface IArtwork {
	slug: string;
	title: string;
	artist: IPartialArtist;
	alternative_title: string | null;
	year: number;
	museum: IPartialMuseum;
	description: string;
}

export interface IPartialArtwork {
	title: string;
	artist: IPartialArtist;
	slug: string;
	year: number;
}
