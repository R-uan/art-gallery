import Image from "next/image";
import s from "./Introduction.module.scss";
export default function Introduction() {
	return (
		<div className={s.introduction}>
			<div>
				<span className="font-amiri">What is Art</span>
				<p>
					Art is the vibrant pulse of human expression, a kaleidoscope of creativity that transcends boundaries and speaks to the soul. It's
					the brushstroke on canvas, the melody on air, the dance of light and shadow.
					<br />
					<br />
					Art captures emotions, challenges perspectives, and invites us to see the world through a different lens. It's the language of the
					heart, communicating across cultures and generations, weaving stories and igniting imaginations.
					<br />
					<br />
					Art is the mirror reflecting society's triumphs and struggles, its beauty and its flaws. In its myriad forms, art celebrates the
					human experience, reminding us of our shared humanity and the boundless possibilities of the human spirit.
				</p>
			</div>
			<div className={s.introduction_image}>
				<div className={s.image}>
					<div>
						<Image className={s.image} alt="Flora" src={"/assets/home/Flora.jpg"} fill={true} />
					</div>
					{/* <div>
						<span>Flora, 1892. Max Nonnenbruch.</span>
					</div> */}
				</div>
				<div className={s.shade}></div>
			</div>
		</div>
	);
}
