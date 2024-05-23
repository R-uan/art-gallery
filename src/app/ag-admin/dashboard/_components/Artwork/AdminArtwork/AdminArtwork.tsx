import { useUpdateArtwork } from "@/app/_contexts/UpdateArtworkContext";
import { IPartialArtwork } from "@/interfaces/IArtwork";
import s from "./AdminArtwork.module.scss";
export default function AdminArtwork({ data }: { data: IPartialArtwork }) {
	const { artwork, setArtworkId } = useUpdateArtwork();
	const BeginUpdate = () => setArtworkId(data.artworkId);

	return (
		<div className={s.img_box} onClick={() => BeginUpdate()}>
			<img alt={data.slug} src={data.imageURL} />
			<div className={s.info}>
				<div></div>
				<div>
					<h1>{data.title}</h1>
					<h3>{data.artist}</h3>
				</div>
			</div>
		</div>
	);
}
