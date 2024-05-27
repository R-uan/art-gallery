"use client";
import s from "./Exibition.module.scss";
import React, { useEffect } from "react";
import Artwork from "../Artwork/Artwork";
import { VscLoading } from "react-icons/vsc";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { RootState } from "@/app/_contexts/ArtworkStore";
import { setListingData, setListingError, setListingFetch } from "@/app/_contexts/_slices/ArtworkListingSlice";

export default function Exibition() {
	const setState = useDispatch();
	const { ref, inView } = useInView({ threshold: 1, initialInView: true });
	const { data, fetching, error } = useSelector((s: RootState) => s.artworkListing);

	useEffect(() => {
		async function InitialQuery() {
			try {
				if (fetching == false && inView == true) {
					setState(setListingFetch(true));
					let artworks = null;
					if (data?.items.length == null) {
						artworks = await ArtworkRequest.Paginated();
					} else if (data != null && data.hasNextPage) {
						const response = await ArtworkRequest.Paginated(data.pageIndex + 1);
						response.items = [...data.items, ...response.items];
						artworks = response;
					}
					if (artworks != null) setState(setListingData(artworks));
				}
			} catch (error) {
				setState(setListingError(true));
			} finally {
				setState(setListingFetch(false));
			}
		}

		InitialQuery();
	}, [inView]);

	return data && data.items.length > 0 ? (
		<React.Fragment>
			<div className={s.exposition}>
				{data.items.map((artwork) => {
					return <Artwork key={artwork.slug} artwork={artwork} />;
				})}
			</div>
			{data.hasNextPage ? (
				<div ref={ref} className="animate-spin">
					<span className="text-[2vw]">
						<VscLoading fill="white" />
					</span>
				</div>
			) : null}
		</React.Fragment>
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
