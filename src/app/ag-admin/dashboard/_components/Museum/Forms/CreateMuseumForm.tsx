"use client";
import MuseumRequest from "@/scripts/Requests/MuseumRequest";
import React, { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import { useCreateMuseum } from "../Contexts/CreateMuseumContext";
import { MuseumFormStyled } from "./MuseumFormStyled";

type Inputs = {
	name: string;
	slug: string;
	country: string;
	state: string;
	city: string;
	latitude: number | null;
	longitude: number | null;
};

export default function CreateMuseumForm({ refresh, setRefresh }: { refresh: number; setRefresh: React.Dispatch<SetStateAction<number>> }) {
	const { error, setOpen, setError } = useCreateMuseum();
	const { register, handleSubmit, watch } = useForm<Inputs>({});
	const [saving, setSavingStatus] = useState<boolean>(false);

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setSavingStatus(true);
			const museums = { ...data };
			const request = await MuseumRequest.Post(museums);
			if (request == true) {
				setOpen(false);
				setRefresh(refresh + 1);
			}
		} catch (error) {
			if (error instanceof Error) setError(error.message);
			else setError("Unexpected Error.");
		} finally {
			setSavingStatus(false);
		}
	};

	return (
		<MuseumFormStyled>
			{error ? (
				<span className="animate-spin text-[1.25rem] max-w-[70%] ">{error}</span>
			) : (
				<React.Fragment>
					<div className="head">
						<div className="h-fit">
							<span className="text-[1.5rem] leading-[1]">Create Museum</span>
						</div>
						<div>
							<button onClick={() => setOpen(false)}>
								<span className="text-[1.5rem] leading-[1]">x</span>
							</button>
						</div>
					</div>
					<div className="target">
						<form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
							{/* <div className="image">
								<img src={image} alt="portrait preview" />
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
											<button disabled={saving} type="submit" className="flex justify-center items-center">
												{saving ? (
													<span className="animate-spin h-fit">
														<VscLoading size={25} />
													</span>
												) : (
													<span>Submit Artwork</span>
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
