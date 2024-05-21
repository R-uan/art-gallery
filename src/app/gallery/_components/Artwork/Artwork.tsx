import s from "./Artwork.module.scss";
import { useRouter } from "next/navigation";
import { IPartialArtwork } from "@/interfaces/IArtwork";
export default function Artwork({ artwork }: { artwork: IPartialArtwork }) {
	const router = useRouter();
	return (
		<div className={s.img_box} onClick={() => router.push(`/gallery/${artwork.slug}`)}>
			<img alt={artwork.name} src={artwork.imageURL} />
			<div className={s.info}>
				<div>
					<span>Year</span>
				</div>
				<div>
					<h1>{artwork.name}</h1>
					<h3>{artwork.artist}</h3>
				</div>
			</div>
		</div>
	);
}
