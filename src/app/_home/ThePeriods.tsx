import Link from "next/link";
import { eras, featured_eras } from "../(Components)/Home/Eras";
import EraMiniature from "../(Components)/Eras/EraMiniature";
import s from "./ThePeriods.module.scss";
export default function ThePeriods() {
	return (
		<div className={s.the_periods}>
			<div>
				<span className="font-amiri">The Periods</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam beatae, optio repudiandae similique officiis illum,
					accusantium odio rem, est sint error ipsam earum harum vel porro eaque quibusdam quod.
				</p>
			</div>
			<div className={s.featured}>
				{featured_eras.map((era) => {
					return <EraMiniature era={era} key={era.name} />;
				})}
			</div>
			<div>
				<div>
					<span className="font-amiri">Other Periods</span>
				</div>
				<div>
					<ul>
						{eras.map((era) => {
							return (
								<Link key={era} href={""}>
									<li className="font-amiri">{era}</li>
								</Link>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
