import s from "./AdminArtwork.module.scss";
export default function AdminArtwork() {
	return (
		<button>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[1].jpg"} />
				<div className={s.info}>
					<div>
						<span>Year</span>
					</div>
					<div>
						<h1>Title</h1>
						<h3>Author</h3>
					</div>
				</div>
			</div>
		</button>
	);
}
