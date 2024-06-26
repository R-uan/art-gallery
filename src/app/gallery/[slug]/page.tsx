"use client";
import Footer from "@/app/(Components)/Footer/Footer";
import Header from "@/app/(Components)/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import ArtworkLocation from "./_components/ArtworkLocation/ArtworkLocation";
import ArtworkOverview from "./_components/ArtworkOverview/ArtworkOverview";
import OtherArtworks from "./_components/OtherArtworks/OtherArtworks";
import s from "./page.module.scss";
import { GalleryStore } from "@/app/_contexts/GalleryStore";

const client = new QueryClient();
export default function Artwork({ params }: { params: { slug: string } }) {
	return (
		<QueryClientProvider client={client}>
			<Provider store={GalleryStore}>
				<Header transparent={false} />
				<main className={s.artwork}>
					<div>
						<ArtworkOverview slug={params.slug} />
						<ArtworkLocation />
						<OtherArtworks />
					</div>
				</main>
				<Footer />
			</Provider>
		</QueryClientProvider>
	);
}
