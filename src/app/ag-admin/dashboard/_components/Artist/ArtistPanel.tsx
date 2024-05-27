"use client";
import ArtistSearch from "@/app/(Components)/Search/Artist/ArtistSearch";
import React from "react";
import { ArtistPanelStyled } from "./ArtistPanelStyled";
import UpdateArtistProvider from "./UpdateArtistContext";
import UpdateArtistForm from "./UpdateArtistForm";

export default function ArtistPanel() {
	return (
		<React.Fragment>
			<UpdateArtistProvider>
				<UpdateArtistForm />
				<ArtistPanelStyled>
					<div className="w-full flex justify-center items-center gap-[40px]">
						<ArtistSearch />
						<div className="create">
							<button>
								<span>Add New</span>
							</button>
						</div>
					</div>
					<div></div>
				</ArtistPanelStyled>
			</UpdateArtistProvider>
		</React.Fragment>
	);
}
