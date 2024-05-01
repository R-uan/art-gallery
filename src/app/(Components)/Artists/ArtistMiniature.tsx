import Image from "next/image";
import s from "./ArtistMiniature.module.scss";

export default function ArtistMiniature() {
	return (
		<div className={s.miniature}>
			<div className={s.portrait}>
				<Image alt="portrait of" className={s.image} fill={true} src={"/assets/mich.jpg"} />
			</div>
			<div className={s.info}>
				<h1 className="font-amiri">Michelangelo di Lodovico Buonarroti Simoni</h1>
				<h3>Esculptor/Pintor Renascentista</h3>
			</div>
		</div>
	);
}
