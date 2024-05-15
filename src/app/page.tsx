import Link from "next/link";
import { arts } from "./(Components)/Home/Art";
import Image from "next/image";
import { artists } from "./(Components)/Home/Artists";
import { eras, featured_eras } from "./(Components)/Home/Eras";
import Footer from "./(Components)/Footer/Footer";
import Header from "./(Components)/Header/Header";
import s from "@/app/(Components)/Home/home.module.scss";
import EraMiniature from "./(Components)/Eras/EraMiniature";
import ArtistMiniature from "./(Components)/Artists/ArtistMiniature";

export default function Home() {
	return (
		<body className={s.body}>
			<Header transparent={true} position="absolute" />
			<main className={s.main}>
				<div className={s.landing}>
					<span>SOMETHING GOES HERE</span>
				</div>
				<div className={s.content}>
					<div className={s.introduction}>
						<div>
							<span className="font-amiri">What is Art</span>
							<p>
								Art is the vibrant pulse of human expression, a kaleidoscope of creativity that transcends
								boundaries and speaks to the soul. It's the brushstroke on canvas, the melody on air, the
								dance of light and shadow.
								<br />
								<br />
								Art captures emotions, challenges perspectives, and invites us to see the world through a
								different lens. It's the language of the heart, communicating across cultures and
								generations, weaving stories and igniting imaginations.
								<br />
								<br />
								Art is the mirror reflecting society's triumphs and struggles, its beauty and its flaws. In
								its myriad forms, art celebrates the human experience, reminding us of our shared humanity
								and the boundless possibilities of the human spirit.
							</p>
						</div>
						<div>
							<div>
								<Image className={s.image} alt="Flora" src={"/assets/home/Flora.jpg"} fill={true} />
							</div>
							<div>
								<span>Flora, 1892. Max Nonnenbruch.</span>
							</div>
						</div>
					</div>
					<div className={s.the_artists}>
						<div>
							<span className="font-amiri">The Artists</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laudantium tenetur
								accusantium dolorem iure ea alias similique? Impedit a nihil similique tempore corrupti. Rem
								minus commodi fugit ab possimus! Distinctio cupiditate amet, iusto ut consequatur, quibusdam
								voluptatum doloribus quidem dicta temporibus porro aliquid corporis laboriosam magnam eveniet
								voluptate aspernatur modi quis numquam nam ratione quos incidunt tempore? Nostrum,
								recusandae.
							</p>
						</div>
						<div>
							{artists.map((artist) => {
								return <ArtistMiniature key={artist.name} artist={artist} />;
							})}
						</div>
					</div>
					<div className={s.the_art}>
						<div>
							<span className="font-amiri">The Art</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis veritatis error qui
								accusamus! Doloribus aut commodi eum, maiores illo sit autem itaque unde vitae nostrum
								blanditiis. Quaerat cum commodi praesentium. Eius aliquid ad, vel facilis architecto repellat
								inventore quod magni consectetur libero? Exercitationem, nam laborum commodi tempora soluta
								suscipit ex! Velit, beatae ipsam veritatis repellat quod qui vel aliquid vero.
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
					<div className={s.the_periods}>
						<div>
							<span className="font-amiri">The Periods</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam beatae, optio
								repudiandae similique officiis illum, accusantium odio rem, est sint error ipsam earum harum
								vel porro eaque quibusdam quod.
							</p>
						</div>
						<div>
							{featured_eras.map((era) => {
								return <EraMiniature era={era} key={era.name} />;
							})}
						</div>
						<div>
							<div>
								<span className="font-amiri">Other Eras</span>
							</div>
							<div>
								<ul>
									{eras.map((era) => {
										return (
											<Link key={era} href={""}>
												<li>{era}</li>
											</Link>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</body>
	);
}
