"use client";
import React, { useEffect } from "react";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useDispatch, useSelector } from "react-redux";
import AdminArtwork from "../AdminArtwork/AdminArtwork";
import { RootState } from "@/app/_contexts/ArtworkStore";
import { ArtworkPanelStyled } from "./ArtworkPanelStyled";
import UpdateArtworkForm from "../ArtworkForm/UpdateArtworkForm";
import CreateArtworkForm from "../ArtworkForm/CreateArtworkForm";
import { setListingData } from "@/app/_contexts/ArtworkListingSlice";
import { useCreateArtwork } from "@/app/_contexts/CreateArtworkContext";
import { useUpdateArtwork } from "@/app/_contexts/UpdateArtworkContext";
import Pagination from "@/app/gallery/_components/Pagination/Pagination";
import ArtworkFilter from "@/app/gallery/_components/Filter/ArtworkFilter";

export default function ArtworkPanel() {
	const setState = useDispatch();
	const { isOpen, setOpen } = useCreateArtwork();
	const { isReadyToUpdate } = useUpdateArtwork();
	const { data } = useSelector((s: RootState) => s.artworkListing);

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
		<React.Fragment>
			{isReadyToUpdate != null ? <UpdateArtworkForm /> : null}
			{isOpen ? <CreateArtworkForm /> : null}
			<ArtworkPanelStyled>
				<div className="w-full flex justify-center items-center gap-[40px]">
					<ArtworkFilter />
					<div className="create">
						<button onClick={() => setOpen(true)}>
							<span>Add New</span>
						</button>
					</div>
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
		</React.Fragment>
	);
}
