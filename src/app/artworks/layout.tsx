import Footer from "../(Components)/Footer/Footer";
import Header from "../(Components)/Header/Header";
import s from "./Gallery.module.scss";
export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <body className={s.body}>{children}</body>;
}
