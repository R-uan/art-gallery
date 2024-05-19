"use client";
import { useDispatch, useSelector } from "react-redux";
import s from "./Exibition.module.scss";
import { RootState, setArtworks } from "../../_contexts/ExibitionStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useEffect } from "react";

export default function Exibition() {
	const exibition = useSelector((s: RootState) => s.artworks);
	const client = useQueryClient();
	const state = useDispatch();
	const query = useQuery({ queryKey: ["artworks"], queryFn: async () => ArtworkRequest.GetPartialArtworks() });
	async function Query() {
		const data = await ArtworkRequest.GetPartialArtworks();
	}
	return (
		<div className={s.exposition}>
			{query.data?.map((art) => {
				return (
					<div className={s.img_box}>
						<img alt={art.name} src={art.imageURL} />
						<div className={s.info}>
							<div>
								<span>nothing</span>
							</div>
							<div>
								<h1>{art.name}</h1>
								<h3>{art.artist}</h3>
							</div>
						</div>
					</div>
				);
			})}
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
			<div className={s.img_box}></div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[3].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[4].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[5].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[6].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[7].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[8].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[9].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[10].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[11].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[12].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[13].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[14].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[15].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[16].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[17].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[18].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[19].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[20].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[21].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[22].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[23].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[24].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[25].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[26].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[27].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[28].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[29].jpg"} />
			</div>
			<div className={s.img_box}>
				<img alt="" src={"/assets/gallery-test/@gallery-test[30].jpg"} />
			</div>
		</div>
	);
}
