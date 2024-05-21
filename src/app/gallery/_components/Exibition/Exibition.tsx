"use client";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useArtworkQuery } from "../../_contexts/ArtworkFilterContext";
import Artwork from "../Artwork/Artwork";
import s from "./Exibition.module.scss";
import { VscLoading } from "react-icons/vsc";

export default function Exibition() {
	const params = useSearchParams();
	const [error, setError] = useState<boolean>(false);
	const [loading, isLoading] = useState<boolean>(false);
	const { data, setDataState } = useArtworkQuery();

	useEffect(() => {
		isLoading(true);
		async function Query() {
			try {
				const page = params.get("page");
				const result = await ArtworkRequest.PaginatedArtworks(page ? parseInt(page) : 1);
				if (result) {
					if (result.items.length == 0) setDataState(null);
					else setDataState(result);
				}
			} catch (error) {
				isLoading(false);
				setError(true);
			}
		}

		Query();
	}, [params]);

	return data && data.items.length > 0 ? (
		<div className={s.exposition}>
			{/* {data.items.map((artwork) => {
				return <Artwork key={artwork.slug} artwork={artwork} />;
			})} */}
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
			<Artwork artwork={data.items[0]} />
		</div>
	) : data && data.items.length == 0 ? (
		<div className="flex items-center justify-center w-full  min-h-[73vh]">
			<div>
				<span className="text-[3vw] text-white">Oops! Nothing was found.</span>
			</div>
		</div>
	) : error ? (
		<div className="flex items-center justify-center w-full min-h-[73vh]">
			<div>
				<span className="text-[3vw]">An Unexpected Error Occurred.</span>
			</div>
		</div>
	) : (
		<div className="flex items-center justify-center w-full  min-h-[73vh]">
			<div className="animate-spin">
				<span className="text-[3vw]">
					<VscLoading />
				</span>
			</div>
		</div>
	);
}
