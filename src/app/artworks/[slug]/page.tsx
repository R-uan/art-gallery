"use client";
import Footer from "@/app/(Components)/Footer/Footer";
import Header from "@/app/(Components)/Header/Header";
import ArtworkLocation from "./_components/ArtworkLocation/ArtworkLocation";
import ArtworkOverview from "./_components/ArtworkOverview/ArtworkOverview";
import OtherArtworks from "./_components/OtherArtworks/OtherArtworks";
import ArtworkProvider from "./_context/ArtworkProvider";
import s from "./SelectedArtwork.module.scss";

export default function SelectedArtwork({ params }: { params: { slug: string } }) {
	return (
		<ArtworkProvider>
			<Header transparent={false} />
			<main className={s.selected_artwork}>
				<div>
					<ArtworkOverview slug={params.slug} />
					<ArtworkLocation />
					<OtherArtworks />
				</div>
			</main>
			<Footer />
		</ArtworkProvider>
	);
}
