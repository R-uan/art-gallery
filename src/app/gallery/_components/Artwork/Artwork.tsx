import { IPartialArtwork } from "@/interfaces/Artwork/IArtwork";
import s from "./Artwork.module.scss";
import { useRouter } from "next/navigation";

export default function Artwork({ artwork }: { artwork: IPartialArtwork }) {
	const router = useRouter();
	return (
		<div className={s.img_box} onClick={() => router.push(`/gallery/${artwork.slug}`)}>
			<img alt={artwork.title} src={artwork.imageURL} />
			<div className={s.info}>
				<div></div>
				<div>
					<h1>{artwork.title}</h1>
					<h3>{artwork.artist}</h3>
				</div>
			</div>
		</div>
	);
}
