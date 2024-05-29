import { arts } from "../(Components)/Home/Art";
import s from "./TheArtwork.module.scss";

export default function TheArtworks() {
	return (
		<div className={s.the_art}>
			<div>
				<span className="font-amiri">The Art</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis veritatis error qui accusamus! Doloribus aut commodi eum,
					maiores illo sit autem itaque unde vitae nostrum blanditiis. Quaerat cum commodi praesentium. Eius aliquid ad, vel facilis
					architecto repellat inventore quod magni consectetur libero? Exercitationem, nam laborum commodi tempora soluta suscipit ex!
					Velit, beatae ipsam veritatis repellat quod qui vel aliquid vero.
				</p>
			</div>
			<div>
				{arts.map((art) => {
					return (
						<div key={art.image}>
							<img className={s.image} alt={art.title} src={art.image} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
