import React from "react";
import Header from "../(Components)/Header/Header";
import s from "./page.module.scss";
export default function Artists() {
	return (
		<React.Fragment>
			<Header transparent={true} />
			<main className={s.main}>
				<div>
					<h1 className={s.name}>Leonardo Da Vinci</h1>
					<h1 className={s.profession}>Polimata</h1>
					<h1 className={s.country}>Italy</h1>
					<h1 className={s.years}>1800 - 8000</h1>
					<div className={s.big_image}>
						<img src={"assets/home/the-artist/leonardo.jpg"} alt="" />
						<div className={s.overlay} />
					</div>
				</div>
				<div></div>
			</main>
		</React.Fragment>
	);
}
