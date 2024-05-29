import { IPartialArtist } from "../Artist/IArtist";
import IMuseum from "../Museum/IMuseum";

export interface IArtwork {
	artworkId: number;
	slug: string;
	title: string;
	artist: IPartialArtist;
	year: number;
	museum: IMuseum;
	history: string;
	period: string | null;
	imageURL: string;
}

export interface IPartialArtwork {
	artworkId: number;
	title: string;
	slug: string;
	artist: string;
	imageURL: string;
}
