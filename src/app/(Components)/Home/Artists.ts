export interface Artist {
	name: string;
	portrait: string;
	profession: string;
}

export const artists: Artist[] = [
	{ name: "Donato di Niccoló di Betto Bardi", portrait: "/assets/home/the-artist/donatell.jpg", profession: "Sculptor" },
	{ name: "Leonardo da Vinci", portrait: "/assets/home/the-artist/leonardo.jpg", profession: "Painter" },
	{
		name: "Michelangelo di Lodovico Buonarroti Simoni",
		portrait: "/assets/home/the-artist/mich.jpg",
		profession: "Painter/Sculptor",
	},
	{ name: "Raffaello Sanzio da Urbino", portrait: "/assets/home/the-artist/Raffaello.jpg", profession: "Painter" },
];
