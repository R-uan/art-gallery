"use client";
import { setMuseumListingData } from "@/app/_contexts/_slices/MuseumListingSlice";
import MuseumRequest from "@/scripts/Requests/MuseumRequest";
import React, { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { useUpdateMuseum } from "../Contexts/UpdateMuseumContext";
import { MuseumFormStyled } from "./MuseumFormStyled";

type Inputs = {
	name: string | null;
	slug: string | null;
	country: string | null;
	state: string | null;
	city: string | null;
	latitude: number | null;
	longitude: number | null;
};
export default function UpdateMuseumForm({ refresh, setRefresh }: { refresh: number; setRefresh: React.Dispatch<SetStateAction<number>> }) {
	const [updating, setUpdatingStatus] = useState<boolean>(false);
	const { museum, isReadyToUpdate, error, setMuseumId, setError } = useUpdateMuseum();

	const { register, handleSubmit } = useForm<Inputs>({
		values: {
			name: museum?.name ?? null,
			slug: museum?.slug ?? null,
			country: museum?.country ?? null,
			city: museum?.city ?? null,
			state: museum?.state ?? null,
			latitude: museum?.latitude ?? null,
			longitude: museum?.longitude ?? null,
		},
	});

	const onSubmit: SubmitHandler<Inputs> = async function (data) {
		try {
			if (museum?.museumId) {
				setUpdatingStatus(true);
				const update = { ...data };
				const request = await MuseumRequest.Update(museum!.museumId, update);
				if (request == true) {
					setRefresh(refresh + 1);
					setMuseumId(null);
				}
			} else setError("Unable to find museum ID.");
		} catch (error) {
			if (error instanceof Error) setError(error.message);
			else setError("Unexpected Error.");
		} finally {
			setUpdatingStatus(false);
		}
	};

	return (
		<MuseumFormStyled>
			{isReadyToUpdate == false && error == null ? (
				<span className="animate-spin h-fit w-fit">
					<VscLoading fill="white" size={50} />
				</span>
			) : error ? (
				<span className="animate-spin text-[1.25rem] max-w-[70%] ">{error}</span>
			) : (
				<React.Fragment>
					<div className="head">
						<div className="h-fit">
							<span className="text-[1.5rem] leading-[1]">Update Museum</span>
						</div>
						<div>
							<button onClick={() => setMuseumId(null)}>
								<span className="text-[1.5rem] leading-[1]">x</span>
							</button>
						</div>
					</div>
					<div className="target">
						<form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
							{/* <div className="image">
								<img src={image ?? ""} alt={museum?.slug} />
							</div> */}
							<div className="flex flex-col justify-between">
								<div className="inputs">
									<div>
										<div>
											<label htmlFor="name">Name</label>
											<input id="name" {...register("name")} type="text" placeholder="Name" />
										</div>
										<div>
											<label htmlFor="slug">Slug</label>
											<input id="slug" {...register("slug")} type="text" placeholder="Slug" />
										</div>
									</div>
									<div>
										<div>
											<label htmlFor="country">Country</label>
											<input id="country" {...register("country")} type="text" placeholder="Country" />
										</div>
										<div>
											<label htmlFor="state">State</label>
											<input id="state" {...register("state")} type="text" placeholder="State" />
										</div>
									</div>
									<div>
										<div>
											<label htmlFor="city">City</label>
											<input id="city" {...register("city")} type="text" placeholder="City" />
										</div>
										<div>
											<label htmlFor="latitude">Latitude</label>
											<input id="latitude" {...register("latitude")} type="text" placeholder="Latitude" />
										</div>
									</div>
									<div>
										<div>
											<label htmlFor="longitude">Longitude</label>
											<input id="longitude" {...register("longitude")} placeholder="Longitude" />
										</div>
										<div className="buttons">
											<button disabled={updating} type="submit">
												{updating ? (
													<span className="animate-spin h-fit">
														<VscLoading size={25} />
													</span>
												) : (
													<span>Save Changes</span>
												)}
											</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</React.Fragment>
			)}
		</MuseumFormStyled>
	);
}
