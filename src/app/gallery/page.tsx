"use client";
import { Provider } from "react-redux";
import Footer from "../(Components)/Footer/Footer";
import Header from "../(Components)/Header/Header";
import { GalleryStore } from "../_contexts/GalleryStore";
import Exibition from "./_components/Exibition/Exibition";
import ArtworkFilter from "./_components/Filter/ArtworkFilter";
import s from "./page.module.scss";

export default function Gallery() {
	return (
		<Provider store={GalleryStore}>
			<Header transparent={false} position="absolute" />
			<main className={s.gallery}>
				<div className={s.header}></div>
				<ArtworkFilter />
				<Exibition />
			</main>
			<Footer />
		</Provider>
	);
}
