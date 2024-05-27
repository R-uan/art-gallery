import { useUpdateArtwork } from "@/app/_contexts/UpdateArtworkContext";
import { IPartialArtwork } from "@/interfaces/IArtwork";
import s from "./AdminArtwork.module.scss";
import Swal from "sweetalert2";
import ArtworkRequest from "@/scripts/ArtworkRequest";
export default function AdminArtwork({ data }: { data: IPartialArtwork }) {
	const { artwork, setArtworkId } = useUpdateArtwork();
	const BeginUpdate = () => setArtworkId(data.artworkId);
	const onClick = () => {
		Swal.fire({
			color: "white",
			icon: "warning",
			title: "Are you sure?",
			showCancelButton: true,
			background: "#050a0e",
			cancelButtonColor: "#FF003C",
			confirmButtonColor: "#00F0FF",
			confirmButtonText: "Yes, delete it!",
			text: `Do you want to delete ${data.title} ? You won't be able to revert this!`,
		}).then(async (result) => {
			if (result.isConfirmed) {
				const request = await ArtworkRequest.Delete(data.artworkId);
				Swal.fire({
					color: "white",
					icon: "success",
					title: "Deleted!",
					background: "#050a0e",
					text: `${data.title} deleted!`,
					confirmButtonColor: "#00F0FF",
				});
			}
		});
	};

	return (
		<div className={s.img_box}>
			<img alt={data.slug} src={data.imageURL} />
			<div className={s.info}>
				<div className="flex justify-between">
					<button onClick={() => onClick()}>
						<span>Delete</span>
					</button>
					<button onClick={() => BeginUpdate()}>
						<span>Update</span>
					</button>
				</div>
				<div>
					<h1>{data.title}</h1>
					<h3>{data.artist}</h3>
				</div>
			</div>
		</div>
	);
}
