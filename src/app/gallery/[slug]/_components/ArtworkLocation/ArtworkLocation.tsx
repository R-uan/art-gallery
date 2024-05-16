import { useArtworkContext } from "../../_context/ArtworkProvider";
import s from "./ArtworkLocation.module.scss";
export default function ArtworkLocation() {
	const artwork_context = useArtworkContext();
	const address = artwork_context.artwork?.museum;
	return (
		<div className={s.location}>
			<div>
				<span className="font-bebas">Where is it Located ?</span>
			</div>
			<div className={s.address}>
				<div>
					<span>Country</span>
					<span>{address?.country ?? "???"}</span>
				</div>
				<div>
					<span>Estate</span>
					<span>{address?.estate ?? "???"}</span>
				</div>
				<div>
					<span>City</span>
					<span>{address?.city ?? "???"}</span>
				</div>
				<div>
					<span>Street</span>
					<span>{address?.city ?? "???"}</span>
				</div>
			</div>
			<div className={s.map}>
				<iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
			</div>
		</div>
	);
}
