import { IPartialArtist } from "./IArtist";
import IMuseum, { IPartialMuseum } from "./IMuseum";

export interface IArtwork {
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
	slug: string;
	name: string;
	artist: string;
	imageURL: string;
}
