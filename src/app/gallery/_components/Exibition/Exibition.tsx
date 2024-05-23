"use client";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Artwork from "../Artwork/Artwork";
import s from "./Exibition.module.scss";
import { VscLoading } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_contexts/ArtworkStore";
import { setListingData } from "@/app/_contexts/ArtworkListingSlice";

export default function Exibition() {
	const params = useSearchParams();
	const [error, setError] = useState<boolean>(false);
	const [loading, isLoading] = useState<boolean>(false);
	const setState = useDispatch();
	const { data } = useSelector((s: RootState) => s.artworkListing);

	useEffect(() => {
		isLoading(true);
		async function Query() {
			try {
				const page = params.get("page");
				const result = await ArtworkRequest.PaginatedArtworks(page ? parseInt(page) : 1);
				console.log(result);
				if (result) {
					if (result.items.length == 0) setState(setListingData(null));
					else setState(setListingData(result));
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
			{data.items.map((artwork) => {
				return <Artwork key={artwork.slug} artwork={artwork} />;
			})}
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
				<span className="text-[3vw] text-white">An Unexpected Error Occurred.</span>
			</div>
		</div>
	) : (
		<div className="flex items-center justify-center w-full  min-h-[73vh]">
			<div className="animate-spin">
				<span className="text-[3vw]">
					<VscLoading fill="white" />
				</span>
			</div>
		</div>
	);
}
