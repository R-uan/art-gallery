import { useSelector } from "react-redux";
import s from "./ArtworkLocation.module.scss";
import { RootState } from "@/app/_contexts/ArtworkStore";
export default function ArtworkLocation() {
	const { artwork } = useSelector((s: RootState) => s.artworkFocus);
	const address = artwork?.museum;
	return (
		<div className={s.location}>
			<div>
				<div>
					<span className="font-bebas">Location: Museum {address?.name}</span>
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
		</div>
	);
}
