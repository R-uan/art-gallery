"use client";
import ArtistSearch from "@/app/(Components)/Search/Artist/ArtistSearch";
import React, { useEffect, useState } from "react";
import { ArtistPanelStyled } from "./ArtistPanelStyled";
import UpdateArtistProvider, { UpdateArtistContext } from "./Contexts/UpdateArtistContext";
import ReactModal from "react-modal";
import CreateArtistProvider, { CreateArtistContext } from "./Contexts/CreateArtistContext";
import CreateArtistForm from "./Forms/CreateArtistForm";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setArtistListingData, setArtistListingError, setArtistListingFetch } from "@/app/_contexts/_slices/ArtistListingSlice";
import { VscLoading } from "react-icons/vsc";
import { IPartialArtist } from "@/interfaces/Artist/IArtist";
import { RootState } from "@/app/_contexts/GalleryStore";
import Swal from "sweetalert2";
import UpdateArtistForm from "./Forms/UpdateArtistForm";
import ArtistRequest from "@/scripts/Requests/ArtistRequest";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		height: "100%",
		width: "100%",
		border: "none",
		backgroundColor: "transparent",
	},
	overlay: {
		backgroundColor: "#0000004f",
	},
};
ReactModal.setAppElement("#root");
export default function ArtistPanel() {
	const setState = useDispatch();
	const [refresh, setRefresh] = useState<number>(0);
	const { ref, inView } = useInView({ threshold: 1, initialInView: true });
	const { data, fetching, error } = useSelector((s: RootState) => s.artistListing);

	useEffect(() => {
		async function Refresh() {
			const request = await ArtistRequest.Paginated();
			setState(setArtistListingData(request));
		}

		Refresh();
	}, [refresh]);

	useEffect(() => {
		async function InitialQuery() {
			try {
				if (fetching == false && inView == true) {
					setState(setArtistListingFetch(true));
					let artists = null;
					if (data?.items.length == null) {
						artists = await ArtistRequest.Paginated();
					} else if (data != null && data.hasNextPage) {
						const response = await ArtistRequest.Paginated(data.pageIndex + 1);
						response.items = [...data.items, ...response.items];
						artists = response;
					}
					if (artists != null) setState(setArtistListingData(artists));
				}
			} catch (error) {
				setState(setArtistListingError(true));
			} finally {
				setState(setArtistListingFetch(false));
			}
		}

		InitialQuery();
	}, [inView]);

	async function DeleteArtist(artist: IPartialArtist) {
		Swal.fire({
			color: "white",
			icon: "warning",
			title: "Are you sure?",
			showCancelButton: true,
			background: "#050a0e",
			cancelButtonColor: "#FF003C",
			confirmButtonColor: "#00F0FF",
			confirmButtonText: "Yes, delete it!",
			text: `Do you want to delete ${artist.name} ? You won't be able to revert this!`,
		}).then(async (result) => {
			if (result.isConfirmed) {
				const request = await ArtistRequest.Delete(artist.artistId);
				if (request == true) {
					Swal.fire({
						color: "white",
						icon: "success",
						title: "Deleted!",
						background: "#050a0e",
						text: `${artist.name} deleted!`,
						confirmButtonColor: "#00F0FF",
					});
					const artists = await ArtistRequest.Paginated();
					setState(setArtistListingData(artists));
				}
			}
		});
	}

	return (
		<UpdateArtistProvider>
			<UpdateArtistContext.Consumer>
				{(update_context) => (
					<React.Fragment>
						<CreateArtistProvider>
							<CreateArtistContext.Consumer>
								{(create_context) => (
									<React.Fragment>
										<ReactModal style={customStyles} isOpen={create_context?.isOpen ?? false}>
											<CreateArtistForm refresh={refresh} setRefresh={setRefresh} />
										</ReactModal>
										<React.Fragment>
											<ReactModal style={customStyles} isOpen={update_context?.isReadyToUpdate != null}>
												<UpdateArtistForm refresh={refresh} setRefresh={setRefresh} />
											</ReactModal>
											<ArtistPanelStyled>
												<div className="w-full flex justify-center items-center gap-[40px]">
													<ArtistSearch />
													<div className="create">
														<button onClick={() => create_context?.setOpen(true)}>
															<span>Add New</span>
														</button>
													</div>
												</div>
												<div>
													<div>
														{data && data.items.length > 0 ? (
															<React.Fragment>
																<div className="listing">
																	{data?.items.map((artist, index) => {
																		return (
																			<div key={artist.slug + index} className="img_box">
																				<img alt={artist.slug} src={artist.imageURL} />
																				<div className="info">
																					<div className="flex justify-between">
																						<button onClick={() => DeleteArtist(artist)}>
																							<span>Delete</span>
																						</button>
																						<button
																							onClick={() =>
																								update_context?.setArtistId(artist.artistId)
																							}>
																							<span>Update</span>
																						</button>
																					</div>
																					<div>
																						<h1>{artist.name}</h1>
																					</div>
																				</div>
																			</div>
																		);
																	})}
																</div>
																{data.hasNextPage ? (
																	<div ref={ref} className="teste">
																		<span className="text-[2vw] h-fit">
																			<VscLoading fill="white" className="animate-spin" />
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
														)}
													</div>
												</div>
											</ArtistPanelStyled>
										</React.Fragment>
									</React.Fragment>
								)}
							</CreateArtistContext.Consumer>
						</CreateArtistProvider>
					</React.Fragment>
				)}
			</UpdateArtistContext.Consumer>
		</UpdateArtistProvider>
	);
}
