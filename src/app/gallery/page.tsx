"use client";
import Footer from "../(Components)/Footer/Footer";
import Header from "../(Components)/Header/Header";
import Exibition from "./_components/Exibition/Exibition";
import ArtworkFilter from "./_components/Filter/ArtworkFilter";
import Pagination from "./_components/Pagination/Pagination";
import ArtworkFilterProvider from "./_contexts/ArtworkFilterContext";
import s from "./page.module.scss";

export default function Gallery() {
	return (
		<ArtworkFilterProvider>
			<Header transparent={false} position="absolute" />
			<main className={s.gallery}>
				<div className={s.header}></div>
				<ArtworkFilter />
				<Exibition />
				<Pagination />
			</main>
			<Footer />
		</ArtworkFilterProvider>
	);
}
