import s from "./page.module.scss";

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <body className={s.body}>{children}</body>;
}
