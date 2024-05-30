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
	resume: string[];
}

export const periods: Era[] = [
	{
		name: "Renaissence",
		period: [1300, 1600],
		cover: "/assets/home/the-period/renaissence.jpg",
		resume: [
			` This period saw a renewed interest in classical antiquity, humanism, and naturalism, which significantly
							influenced the artistic output of the time.`,
			`The Renaissance also fostered the development of oil painting, which allowed for greater flexibility and detail. This period's art was characterized by an exploration of new themes, including mythology, portraiture, and daily life, reflecting a broader shift towards a more human-centered worldview.`,
		],
	},
	{
		name: "Rococo",
		period: [1700, 1800],
		cover: "/assets/home/the-period/rococo.jpg",
		resume: [
			`Emerging as a reaction against the grandeur and strictness of the Baroque, Rococo art emphasized lightness, whimsy, and an exuberant use of color and detail.`,
			`Rococo painting, with its emphasis on beauty and delight, reflects the cultural and social atmosphere of its time, celebrating the frivolity and lightheartedness that characterized the French court and the broader European elite.`,
		],
	},
	{
		name: "Romanticism",
		period: [1770, 1850],
		cover: "/assets/home/the-period/romanticism.jpg",
		resume: [
			`Romanticism in painting, which emerged in the late 18th and early 19th centuries, represented a significant shift from the rationalism and order of the Enlightenment and Neoclassicism. It emphasized emotion, individualism, and the sublime beauty of nature, often focusing on the dramatic and the awe-inspiring.`,
			`
			Romanticism in painting sought to transcend the mundane, celebrating the mysterious, the heroic, and the emotional depth of human experience. `,
		],
	},
	{
		name: "Impressionism",
		period: [1860, 1880],
		cover: "/assets/home/the-period/impressionism.jpg",
		resume: [
			`This movement focused on capturing the fleeting effects of light and color, often depicting scenes of everyday life with a fresh, spontaneous approach.`,
			`Impressionism challenged traditional artistic conventions, paving the way for modern art. It celebrated the beauty of the present moment and the sensory experiences of life, emphasizing perception over precision and emotion over accuracy.`,
		],
	},
];
