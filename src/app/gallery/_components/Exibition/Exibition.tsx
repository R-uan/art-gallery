"use client";
import { RootState } from "@/app/_contexts/GalleryStore";
import { setArtworkListingData, setArtworkListingError, setArtworkListingFetch } from "@/app/_contexts/_slices/ArtworkListingSlice";
import ArtworkRequest from "@/scripts/Requests/ArtworkRequest";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { VscLoading } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import s from "./Exibition.module.scss";

export default function Exibition() {
	const router = useRouter();
	const setState = useDispatch();
	const { ref, inView } = useInView({ threshold: 1, initialInView: true });
	const { data, fetching, error } = useSelector((s: RootState) => s.artworkListing);

	useEffect(() => {
		async function InitialQuery() {
			try {
				if (fetching == false && inView == true) {
					setState(setArtworkListingFetch(true));
					let artworks = null;
					if (data?.items.length == null) {
						artworks = await ArtworkRequest.Paginated();
					} else if (data != null && data.hasNextPage) {
						const response = await ArtworkRequest.Paginated(data.pageIndex + 1);
						response.items = [...data.items, ...response.items];
						artworks = response;
					}
					if (artworks != null) setState(setArtworkListingData(artworks));
				}
			} catch (error) {
				setState(setArtworkListingError(true));
			} finally {
				setState(setArtworkListingFetch(false));
			}
		}

		InitialQuery();
	}, [inView]);

	return data && data.items.length > 0 ? (
		<React.Fragment>
			<div className={s.exposition}>
				{data.items.map((artwork) => {
					return (
						<div className={s.img_box} onClick={() => router.push(`/gallery/${artwork.slug}`)}>
							<img alt={artwork.title} src={artwork.imageURL} />
							<div className={s.info}>
								<div></div>
								<div>
									<h1>{artwork.title}</h1>
									<h3>{artwork.artist}</h3>
								</div>
							</div>
						</div>
					);
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
