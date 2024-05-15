import Artwork from "@/app/artworks/_components/Artwork/Artwork";
import s from "./OtherArtworks.module.scss";
export default function OtherArtworks() {
	return (
		<div className={s.other_artworks}>
			<div>
				<span className="font-bebas">Other Artworks</span>
			</div>
			<div>
				<Artwork />
				<Artwork />
				<Artwork />
				<Artwork />
				<Artwork />
			</div>
		</div>
	);
}
