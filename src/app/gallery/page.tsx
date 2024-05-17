"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import Footer from "../(Components)/Footer/Footer";
import Header from "../(Components)/Header/Header";
import Exibition from "./_components/Exibition/Exibition";
import ArtworkFilter from "./_components/Filter/ArtworkFilter";
import { ExibitionStore } from "./_contexts/ExibitionStore";
import s from "./page.module.scss";
const client = new QueryClient();

export default function Gallery() {
	return (
		<QueryClientProvider client={client}>
			<Provider store={ExibitionStore}>
				<Header transparent={false} position="sticky" />
				<main className={s.gallery}>
					<ArtworkFilter />
					<Exibition />
				</main>
				<Footer />
			</Provider>
		</QueryClientProvider>
	);
}
