import s from "./ArtworkLocation.module.scss";
export default function ArtworkLocation() {
	return (
		<div className={s.location}>
			<div>
				<span className="font-bebas">Where is it Located ?</span>
			</div>
			<div className={s.address}>
				<div>
					<span>Country</span>
					<span>France</span>
				</div>
				<div>
					<span>State</span>
					<span>Paris</span>
				</div>
				<div>
					<span>City</span>
					<span>???</span>
				</div>
				<div>
					<span>Street</span>
					<span>7 Rue Sainte-Isaure</span>
				</div>
			</div>
			<div className={s.map}>
				<iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
			</div>
		</div>
	);
}
