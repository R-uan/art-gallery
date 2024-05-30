import Link from "next/link";
import s from "./ThePeriods.module.scss";
import { eras, periods } from "../(Components)/Home/Eras";

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
			<div>
				{periods.map((period) => {
					return (
						<div key={period.name} className={s.silly}>
							<div className={s.image}>
								<img src={period.cover} alt="" />
							</div>
							<div className={s.text}>
								<div className="flex flex-col">
									<h1>{period.name}</h1>
									<span>
										{period.period[0]} - {period.period[1]}
									</span>
								</div>
								<div className="flex flex-col gap-[15px]">
									{period.resume.map((part) => {
										return <p>{part}</p>;
									})}
								</div>
							</div>
						</div>
					);
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
