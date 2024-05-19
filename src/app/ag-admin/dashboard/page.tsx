import ArtworkFilter from "@/app/gallery/_components/Filter/ArtworkFilter";
import s from "./page.module.scss";
import AdminArtwork from "./AdminArtwork";
export default function Dashboard() {
	return (
		<body className={s.body}>
			<main>
				<div className={s.menu}>
					<div className={s.logo}>Logo</div>
					<nav>
						<ul className={s.menu_options}>
							<button>
								<li>Artists</li>
							</button>
							<button>
								<li>Museums</li>
							</button>
							<button>
								<li>Artworks</li>
							</button>
							<button>
								<li></li>
							</button>
						</ul>
					</nav>
				</div>
				<div className={s.dashboard}>
					<div>
						<span>Author/Artwork/Museum</span>
					</div>
					<ArtworkFilter />
					<div className={s.exibit}>
						<div>
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
							<AdminArtwork />
						</div>
					</div>
				</div>
			</main>
		</body>
	);
}
