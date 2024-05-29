import Link from "next/link";
import { arts } from "./(Components)/Home/Art";
import Image from "next/image";
import { artists } from "./(Components)/Home/Artists";
import { eras, featured_eras } from "./(Components)/Home/Eras";
import Footer from "./(Components)/Footer/Footer";
import Header from "./(Components)/Header/Header";
import s from "./home.module.scss";
import EraMiniature from "./(Components)/Eras/EraMiniature";
import ArtistMiniature from "./(Components)/Artists/ArtistMiniature";
import Introduction from "./_home/Introduction";
import TheArtists from "./_home/TheArtists";
import TheArtworks from "./_home/TheArtworks";
import ThePeriods from "./_home/ThePeriods";

export default function Home() {
	return (
		<>
			<Header transparent={true} position="absolute" />
			<main className={s.main}>
				<div className={s.landing}>
					<span>SOMETHING GOES HERE</span>
				</div>
				<div className={s.content}>
					<Introduction />
					<TheArtists />
					<TheArtworks />
					<ThePeriods />
				</div>
			</main>
			<Footer />
		</>
	);
}
