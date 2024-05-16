import s from "./page.module.scss";
import Footer from "../(Components)/Footer/Footer";
import Header from "../(Components)/Header/Header";
import Exposition from "./_components/Exposition/Exposition";
import ArtworkFilter from "./_components/Filter/ArtworkFilter";

export default function Gallery() {
	return (
		<>
			<Header transparent={false} position="sticky" />
			<main className={s.gallery}>
				<ArtworkFilter />
				<Exposition />
			</main>
			<Footer />
		</>
	);
}
