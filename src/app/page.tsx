import s from "@/app/(Components)/Home/home.module.scss";
import Link from "next/link";
import ArtistMiniature from "./(Components)/Artists/ArtistMiniature";
import EraMiniature from "./(Components)/Eras/EraMiniature";
import Footer from "./(Components)/Footer/Footer";
import Header from "./(Components)/Header/Header";
import { eras, featured_eras } from "./Eras";

export default function Home() {
	return (
		<body className={s.body}>
			<Header transparent={true} />
			<main className={s.main}>
				<div className={s.landing_box}>
					<span>SOMETHING GOES HERE</span>
				</div>
				<div className={s.content_box}>
					<div className={s.featured_artists}>
						<div>
							<span className={s.bigtext}>FEATURED ARTISTS</span>
						</div>
						<div className={s.artists}>
							<ArtistMiniature />
							<ArtistMiniature />
							<ArtistMiniature />
							<ArtistMiniature />
						</div>
					</div>
					<div className={s.featured_eras}>
						<div>
							<span className={s.bigtext}>Featured Eras</span>
						</div>
						<div className={s.options}>
							{featured_eras.map((era) => {
								return <EraMiniature era={era} key={era.name} />;
							})}
						</div>
					</div>
					<div className={s.eras}>
						<div>
							<span className={s.bigtext}>Other Eras</span>
						</div>
						<ul>
							{eras.map((era) => {
								return (
									<Link key={era} href={""}>
										<li>{era}</li>
									</Link>
								);
							})}
						</ul>
					</div>
				</div>
			</main>
			<Footer />
		</body>
	);
}
