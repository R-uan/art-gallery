import Image from "next/image";
import s from "./ArtistMiniature.module.scss";
import { Artist } from "@/app/(Components)/Home/Artists";

export default function ArtistMiniature({ artist }: { artist: Artist }) {
	return (
		<div className={s.miniature}>
			<div className={s.portrait}>
				<Image alt="portrait of" className={s.image} fill={true} src={artist.portrait} />
			</div>
			<div className={s.info}>
				<h1 className="font-amiri">{artist.name}</h1>
				<h3>{artist.profession}</h3>
			</div>
		</div>
	);
}
