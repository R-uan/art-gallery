import React from "react";
import Footer from "./(Components)/Footer/Footer";
import Header from "./(Components)/Header/Header";
import Introduction from "./_home/Introduction";
import TheArtists from "./_home/TheArtists";
import TheArtworks from "./_home/TheArtworks";
import ThePeriods from "./_home/ThePeriods";
import s from "./home.module.scss";

export default function Home() {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}
