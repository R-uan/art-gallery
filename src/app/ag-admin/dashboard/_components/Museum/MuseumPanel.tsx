"use client";
import { setMuseumListingData, setMuseumListingError, setMuseumListingFetch } from "@/app/_contexts/_slices/MuseumListingSlice";
import { RootState } from "@/app/_contexts/GalleryStore";
import { IPartialMuseum } from "@/interfaces/Museum/IMuseum";
import MuseumRequest from "@/scripts/Requests/MuseumRequest";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import CreateMuseumProvider, { CreateMuseumContext } from "./Contexts/CreateMuseumContext";
import UpdateMuseumProvider, { UpdateMuseumContext } from "./Contexts/UpdateMuseumContext";
import CreateMuseumForm from "./Forms/CreateMuseumForm";
import UpdateMuseumForm from "./Forms/UpdateMuseumForm";
import { MuseumPanelStyled } from "./MuseumPanelStyled";

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

export default function MuseumPanel() {
	const setState = useDispatch();
	const [refresh, setRefresh] = useState<number>(0);
	const { ref, inView } = useInView({ threshold: 1, initialInView: true });
	const { data, fetching, error } = useSelector((s: RootState) => s.museumListing);

	useEffect(() => {
		async function Refresh() {
			const request = await MuseumRequest.Paginated();
			setState(setMuseumListingData(request));
		}

		Refresh();
	}, [refresh]);

	useEffect(() => {
		async function InitialQuery() {
			try {
				if (fetching == false && inView == true) {
					setState(setMuseumListingFetch(true));
					let museums = null;
					if (data?.items.length == null) {
						museums = await MuseumRequest.Paginated();
					} else if (data != null && data.hasNextPage) {
						const response = await MuseumRequest.Paginated(data.pageIndex + 1);
						response.items = [...data.items, ...response.items];
						museums = response;
					}
					if (museums != null) setState(setMuseumListingData(museums));
				}
			} catch (error) {
				setState(setMuseumListingError(true));
			} finally {
				setState(setMuseumListingFetch(false));
			}
		}

		InitialQuery();
	}, [inView]);

	async function DeleteMuseum(museum: IPartialMuseum) {
		Swal.fire({
			color: "white",
			icon: "warning",
			title: "Are you sure?",
			showCancelButton: true,
			background: "#050a0e",
			cancelButtonColor: "#FF003C",
			confirmButtonColor: "#00F0FF",
			confirmButtonText: "Yes, delete it!",
			text: `Do you want to delete ${museum.name} ? You won't be able to revert this!`,
		}).then(async (result) => {
			if (result.isConfirmed) {
				const request = await MuseumRequest.Delete(museum.museumId);
				if (request == true) {
					Swal.fire({
						color: "white",
						icon: "success",
						title: "Deleted!",
						background: "#050a0e",
						text: `${museum.name} deleted!`,
						confirmButtonColor: "#00F0FF",
					});
					const museums = await MuseumRequest.Paginated();
					setState(setMuseumListingData(museums));
				}
			}
		});
	}

	return (
		<UpdateMuseumProvider>
			<UpdateMuseumContext.Consumer>
				{(update_context) => (
					<React.Fragment>
						<CreateMuseumProvider>
							<CreateMuseumContext.Consumer>
								{(create_context) => (
									<React.Fragment>
										<ReactModal
											appElement={document.getElementById("root") as HTMLElement}
											style={customStyles}
											isOpen={create_context?.isOpen ?? false}>
											<CreateMuseumForm refresh={refresh} setRefresh={setRefresh} />
										</ReactModal>
										<React.Fragment>
											<ReactModal
												appElement={document.getElementById("root") as HTMLElement}
												style={customStyles}
												isOpen={update_context?.isReadyToUpdate != null}>
												<UpdateMuseumForm refresh={refresh} setRefresh={setRefresh} />
											</ReactModal>
											<MuseumPanelStyled>
												<div className="w-full flex justify-center items-center gap-[40px]">
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
																	{data?.items.map((museum, index) => {
																		return (
																			<div key={museum.slug + index} className="lista">
																				<div className="info">
																					<div>
																						<div>
																							<label htmlFor="">ID</label>
																							<span>{museum.museumId}</span>
																						</div>
																						<div>
																							<label htmlFor="">Name</label>
																							<span>{museum.name}</span>
																						</div>
																						<div>
																							<label htmlFor="">Country</label>
																							<span>{museum.country}</span>
																						</div>
																					</div>
																					<div>
																						<button
																							onClick={() =>
																								update_context?.setMuseumId(museum.museumId)
																							}>
																							<span>
																								<FaEdit />
																							</span>
																						</button>
																						<button onClick={() => DeleteMuseum(museum)}>
																							<span>
																								<FaTrashAlt />
																							</span>
																						</button>
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
											</MuseumPanelStyled>
										</React.Fragment>
									</React.Fragment>
								)}
							</CreateMuseumContext.Consumer>
						</CreateMuseumProvider>
					</React.Fragment>
				)}
			</UpdateMuseumContext.Consumer>
		</UpdateMuseumProvider>
	);
}
