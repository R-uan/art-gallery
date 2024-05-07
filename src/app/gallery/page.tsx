import ArtworkFilter from "./_components/Filter/ArtworkFilter";
import Header from "../(Components)/Header/Header";
import s from "./Gallery.module.scss";
import Footer from "../(Components)/Footer/Footer";
import Exposition from "./_components/Exposition/Exposition";
export default function Gallery() {
	return (
		<body>
			<Header transparent={false} />
			<main className={s.gallery}>
				<ArtworkFilter />
				<Exposition />
			</main>
			<Footer />
		</body>
	);
}
