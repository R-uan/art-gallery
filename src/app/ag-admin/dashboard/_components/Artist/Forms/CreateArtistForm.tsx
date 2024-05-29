"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import { ArtistFormStyled } from "./ArtistFormStyled";
import { useCreateArtist } from "../Contexts/CreateArtistContext";
import ArtistRequest from "@/scripts/Requests/ArtistRequest";
import { useDispatch } from "react-redux";
import { setArtistListingData } from "@/app/_contexts/_slices/ArtistListingSlice";

type Inputs = {
	name: string;
	slug: string;
	country: string;
	movement: string;
	biography: string;
	profession: string;
	imageURL: string;
};

export default function CreateArtistForm() {
	const { error, setOpen, setError } = useCreateArtist();
	const { register, handleSubmit, watch } = useForm<Inputs>({});
	const [saving, setSavingStatus] = useState<boolean>(false);
	const image = watch("imageURL", "");

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setSavingStatus(true);
			const artist = { ...data };
			console.log(artist);
			const request = await ArtistRequest.Post(artist);
			if (request == true) {
				setOpen(false);
				const artists = await ArtistRequest.Paginated();
				const setState = useDispatch();
				setState(setArtistListingData(artists));
			}
		} catch (error) {
			if (error instanceof Error) setError(error.message);
			else setError("Unexpected Error.");
		} finally {
			setSavingStatus(false);
		}
	};

	return (
		<ArtistFormStyled>
			{error ? (
				<span className="animate-spin text-[1.25rem] max-w-[70%] ">{error}</span>
			) : (
				<React.Fragment>
					<div className="head">
						<div className="h-fit">
							<span className="text-[1.5rem] leading-[1]">Create Artist</span>
						</div>
						<div>
							<button onClick={() => setOpen(false)}>
								<span className="text-[1.5rem] leading-[1]">x</span>
							</button>
						</div>
					</div>
					<div className="target">
						<form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
							<div className="image">
								<img src={image} alt="portrait preview" />
							</div>
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
											<label htmlFor="movement">Movement</label>
											<input id="movement" {...register("movement")} type="text" placeholder="Movement" />
										</div>
									</div>
									<div>
										<div>
											<label htmlFor="profession">Profession</label>
											<input id="profession" {...register("profession")} type="text" placeholder="Profession" />
										</div>
										<div>
											<label htmlFor="profession">Portrait</label>
											<input id="imageurl" {...register("imageURL")} type="text" placeholder="Image URL" />
										</div>
									</div>
									<div>
										<label htmlFor="biography">Biography</label>
										<textarea id="biography" {...register("biography")} placeholder="Biography" />
									</div>
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
						</form>
					</div>
				</React.Fragment>
			)}
		</ArtistFormStyled>
	);
}
