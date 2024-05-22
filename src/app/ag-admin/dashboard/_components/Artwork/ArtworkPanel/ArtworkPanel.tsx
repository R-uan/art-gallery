"use client";
import ArtworkFilter from "@/app/gallery/_components/Filter/ArtworkFilter";
import Pagination from "@/app/gallery/_components/Pagination/Pagination";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useEffect, useState } from "react";
import AdminArtwork from "../AdminArtwork/AdminArtwork";
import { ArtworkPanelStyled } from "./ArtworkPanelStyled";

export default function ArtworkPanel() {
	const [cp, sCp] = useState<number>(1);
	useEffect(() => {
		const query = async () => {
			try {
				const artworks = await ArtworkRequest.PaginatedArtworks();
			} catch (error) {}
		};
	}, []);
	return (
		<ArtworkPanelStyled>
			<div className="w-full">
				<ArtworkFilter />
			</div>
			<div>
				<div>
					<div className="artworks">
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
						<AdminArtwork />
					</div>
				</div>
			</div>
			<div>
				<Pagination />
			</div>
		</ArtworkPanelStyled>
	);
}
