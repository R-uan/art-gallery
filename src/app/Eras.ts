export const eras = [
	"Prehistoric",
	"Byzantine",
	"Medieval",
	"Renaissance",
	"Baroque",
	"Rococo",
	"Neoclassicism",
	"Romanticism",
	"Realism",
	"Impressionism",
	"Post-Impressionism",
	"Expressionism",
	"Surrealism",
	"Abstract Expressionism",
	"Pop Art",
	"Minimalism",
	"Goth",
	"Contemporary",
];

export interface Era {
	name: string;
	cover: string;
	period: [number, number];
}

export const featured_eras: Era[] = [
	{ name: "Renaissence", period: [1300, 1600], cover: "/assets/renaissence.jpg" },
	{ name: "Rococo", period: [1700, 1800], cover: "/assets/rococo.jpg" },
	{ name: "Romanticism", period: [1770, 1850], cover: "/assets/romanticism.jpg" },
	{ name: "Impressionism", period: [1860, 1880], cover: "/assets/impressionism.jpg" },
];
