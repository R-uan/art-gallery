import s from "./Gallery.module.scss";
export default function GalleryLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <body className={s.body}>{children}</body>;
}
