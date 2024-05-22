"use client";
import { Provider } from "react-redux";
import Footer from "../(Components)/Footer/Footer";
import Header from "../(Components)/Header/Header";
import Exibition from "./_components/Exibition/Exibition";
import ArtworkFilter from "./_components/Filter/ArtworkFilter";
import Pagination from "./_components/Pagination/Pagination";
import s from "./page.module.scss";
import { ArtworkStore } from "../_contexts/ArtworkStore";

export default function Gallery() {
	return (
		<Provider store={ArtworkStore}>
			<Header transparent={false} position="absolute" />
			<main className={s.gallery}>
				<div className={s.header}></div>
				<ArtworkFilter />
				<Exibition />
				<Pagination />
			</main>
			<Footer />
		</Provider>
	);
}
