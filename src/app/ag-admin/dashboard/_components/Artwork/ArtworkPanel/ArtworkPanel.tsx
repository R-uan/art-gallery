"use client";
import ArtworkFilter from "@/app/gallery/_components/Filter/ArtworkFilter";
import Pagination from "@/app/gallery/_components/Pagination/Pagination";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useEffect, useState } from "react";
import AdminArtwork from "../AdminArtwork/AdminArtwork";
import { ArtworkPanelStyled } from "./ArtworkPanelStyled";
import { useDispatch, useSelector } from "react-redux";
import { setListingData } from "@/app/_contexts/ArtworkListingSlice";
import { RootState } from "@/app/_contexts/ArtworkStore";
import ArtworkForm from "../ArtworkForm/ArtworkForm";
import { useUpdateArtwork } from "@/app/_contexts/UpdateArtworkContext";

export default function ArtworkPanel() {
	const [cp, sCp] = useState<number>(1);
	const { data } = useSelector((s: RootState) => s.artworkListing);
	const setState = useDispatch();
	const { isReadyToUpdate } = useUpdateArtwork();

	useEffect(() => {
		const query = async () => {
			try {
				const artworks = await ArtworkRequest.PaginatedArtworks();
				setState(setListingData(artworks));
			} catch (error) {}
		};

		query();
	}, []);
	return (
		<>
			{isReadyToUpdate != null ? <ArtworkForm /> : null}
			<ArtworkPanelStyled>
				<div className="w-full">
					<ArtworkFilter />
				</div>
				<div>
					<div>
						<div className="artworks">
							{data?.items.map((artwork) => {
								return <AdminArtwork key={artwork.slug} data={artwork} />;
							})}
						</div>
					</div>
				</div>
				<div>
					<Pagination />
				</div>
			</ArtworkPanelStyled>
		</>
	);
}
