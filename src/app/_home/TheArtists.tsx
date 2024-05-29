import ArtistMiniature from "../(Components)/Artists/ArtistMiniature";
import { artists } from "../(Components)/Home/Artists";
import s from "./TheArtists.module.scss";
export default function TheArtists() {
	return (
		<div className={s.the_artists}>
			<div>
				<span className="font-amiri">The Artists</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laudantium tenetur accusantium dolorem iure ea alias
					similique? Impedit a nihil similique tempore corrupti. Rem minus commodi fugit ab possimus! Distinctio cupiditate amet, iusto ut
					consequatur, quibusdam voluptatum doloribus quidem dicta temporibus porro aliquid corporis laboriosam magnam eveniet voluptate
					aspernatur modi quis numquam nam ratione quos incidunt tempore? Nostrum, recusandae.
				</p>
			</div>
			<div className={s.artist}>
				<div className={s.images}>
					<div>
						<img src={"assets/home/the-artist/leonardo.jpg"} alt="" />
					</div>
					<div>
						<img src={"assets/home/the-artist/mich.jpg"} alt="" />
					</div>
					<div>
						<img src={"assets/home/the-artist/Raffaello.jpg"} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
