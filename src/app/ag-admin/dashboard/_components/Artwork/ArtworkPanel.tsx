"use client";
import Swal from "sweetalert2";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { RootState } from "@/app/_contexts/GalleryStore";
import CreateArtworkForm from "./Forms/CreateArtworkForm";
import UpdateArtworkForm from "./Forms/UpdateArtworkForm";
import { ArtworkPanelStyled } from "./ArtworkPanelStyled";
import { IPartialArtwork } from "@/interfaces/Artwork/IArtwork";
import ArtworkFilter from "@/app/gallery/_components/Filter/ArtworkFilter";
import { setArtworkListingData, setArtworkListingError, setArtworkListingFetch } from "@/app/_contexts/_slices/ArtworkListingSlice";
import ArtworkRequest from "@/scripts/Requests/ArtworkRequest";
import UpdateArtworkProvider, { UpdateArtworkContext } from "./Contexts/UpdateArtworkContext";
import CreateArtworkProvider, { CreateArtworkContext } from "./Contexts/CreateArtworkContext";

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

export default function ArtworkPanel() {
	const setState = useDispatch();
	const [refresh, setRefresh] = useState<number>(0);
	const { ref, inView } = useInView({ threshold: 1, initialInView: true });
	const { data, fetching, error } = useSelector((s: RootState) => s.artworkListing);

	useEffect(() => {
		async function Refresh() {
			const request = await ArtworkRequest.Paginated();
			setState(setArtworkListingData(request));
		}

		Refresh();
	}, [refresh]);

	function DeleteArtwork(data: IPartialArtwork) {
		Swal.fire({
			color: "white",
			icon: "warning",
			title: "Are you sure?",
			showCancelButton: true,
			background: "#050a0e",
			cancelButtonColor: "#FF003C",
			confirmButtonColor: "#00F0FF",
			confirmButtonText: "Yes, delete it!",
			text: `Do you want to delete ${data.title} ? You won't be able to revert this!`,
		}).then(async (result) => {
			if (result.isConfirmed) {
				const request = await ArtworkRequest.Delete(data.artworkId);
				if (request == true) {
					Swal.fire({
						color: "white",
						icon: "success",
						title: "Deleted!",
						background: "#050a0e",
						text: `${data.title} deleted!`,
						confirmButtonColor: "#00F0FF",
					});
					const artworks = await ArtworkRequest.Paginated();
					setState(setArtworkListingData(artworks));
				}
			}
		});
	}

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

	return (
		<UpdateArtworkProvider>
			<UpdateArtworkContext.Consumer>
				{(update_context) => (
					<React.Fragment>
						<Modal
							appElement={document.getElementById("root") as HTMLElement}
							preventScroll={true}
							style={customStyles}
							isOpen={update_context?.isReadyToUpdate != null}>
							<UpdateArtworkForm refresh={refresh} setRefresh={setRefresh} />
						</Modal>
						<CreateArtworkProvider>
							<CreateArtworkContext.Consumer>
								{(create_context) => (
									<React.Fragment>
										<Modal
											appElement={document.getElementById("root") as HTMLElement}
											preventScroll={true}
											style={customStyles}
											isOpen={create_context?.isOpen ?? false}>
											<CreateArtworkForm refresh={refresh} setRefresh={setRefresh} />
										</Modal>
										<ArtworkPanelStyled>
											<div className="w-full flex justify-center items-center gap-[40px]">
												<ArtworkFilter />
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
																{data?.items.map((artwork, index) => {
																	return (
																		<div key={artwork.slug + index} className="img_box">
																			<img alt={artwork.slug} src={artwork.imageURL} />
																			<div className="info">
																				<div className="flex justify-between">
																					<button onClick={() => DeleteArtwork(artwork)}>
																						<span>Delete</span>
																					</button>
																					<button
																						onClick={() =>
																							update_context?.setArtworkId(artwork.artworkId)
																						}>
																						<span>Update</span>
																					</button>
																				</div>
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
																<div ref={ref}>
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
										</ArtworkPanelStyled>
									</React.Fragment>
								)}
							</CreateArtworkContext.Consumer>
						</CreateArtworkProvider>
					</React.Fragment>
				)}
			</UpdateArtworkContext.Consumer>
		</UpdateArtworkProvider>
	);
}
