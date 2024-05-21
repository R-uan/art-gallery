import Artwork from "@/app/gallery/_components/Artwork/Artwork";
import s from "./OtherArtworks.module.scss";
export default function OtherArtworks() {
	return (
		<div className={s.other_artworks}>
			<div>
				<div>
					<span className="font-bebas">Other Artworks</span>
				</div>
				<div>
					{/* <Artwork />
				<Artwork />
				<Artwork />
				<Artwork />
				<Artwork /> */}
				</div>
			</div>
		</div>
	);
}
