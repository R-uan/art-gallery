import Image from "next/image";
import Link from "next/link";
import s from "./EraMiniature.module.scss";
import { Era } from "@/app/Eras";
export default function EraMiniature({ era }: { era: Era }) {
	return (
		<div className={s.era}>
			<Image alt="" src={era.cover} fill={true} className={s.image} />
			<Link href={""}>
				<div>
					<span className="font-bebas">{era.name}</span>
					<span className="font-smooch">{era.period[0] + " - " + era.period[1]}</span>
				</div>
			</Link>
		</div>
	);
}
