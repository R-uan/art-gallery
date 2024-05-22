import { useDispatch } from "react-redux";
import s from "./AdminArtwork.module.scss";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { setArtwork, setFetching, setError } from "@/app/_contexts/ArtworkFocusSlice";
export default function AdminArtwork() {
	const setState = useDispatch();
	async function Query() {
		try {
			setState(setFetching(true));
			const artwork = await ArtworkRequest.GetArtworkBySlug("");
			if (artwork) setState(setArtwork(artwork));
			setState(setFetching(false));
		} catch (error) {
			setState(setError(true));
			setState(setFetching(false));
		}
	}

	return (
		<div className={s.img_box} onClick={() => Query()}>
			<img alt="" src={"/assets/gallery-test/@gallery-test[1].jpg"} />
			<div className={s.info}>
				<div>
					<span>Year</span>
				</div>
				<div>
					<h1>Title</h1>
					<h3>Author</h3>
				</div>
			</div>
		</div>
	);
}
