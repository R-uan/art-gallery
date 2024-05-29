"use client";
import React, { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";

import { ArtistFormStyled } from "./ArtistFormStyled";
import { Input } from "postcss";
import { useUpdateArtist } from "../Contexts/UpdateArtistContext";
import ArtistRequest from "@/scripts/Requests/ArtistRequest";
import { setArtistListingData } from "@/app/_contexts/_slices/ArtistListingSlice";
import { useDispatch } from "react-redux";

type Inputs = {
	name: string | null;
	slug: string | null;
	country: string | null;
	movement: string | null;
	biography: string | null;
	profession: string | null;
	imageURL: string | null;
};
export default function UpdateArtistForm({ refresh, setRefresh }: { refresh: number; setRefresh: React.Dispatch<SetStateAction<number>> }) {
	const [updating, setUpdatingStatus] = useState<boolean>(false);
	const { artist, isReadyToUpdate, error, setArtistId, setError } = useUpdateArtist();

	const { register, handleSubmit, watch } = useForm<Inputs>({
		values: {
			name: artist?.name ?? null,
			slug: artist?.slug ?? null,
			imageURL: artist?.imageURL ?? null,
			movement: artist?.movement ?? null,
			country: artist?.country ?? null,
			biography: artist?.biography ?? null,
			profession: artist?.profession ?? null,
		},
	});

	const image = watch("imageURL");

	const onSubmit: SubmitHandler<Inputs> = async function (data) {
		try {
			if (artist?.artistId) {
				setUpdatingStatus(true);
				const update = { ...data };
				const request = await ArtistRequest.Update(artist!.artistId, update);
				if (request == true) {
					setRefresh(refresh + 1);
					setArtistId(null);
				}
			} else setError("Unable to find artist ID.");
		} catch (error) {
			if (error instanceof Error) setError(error.message);
			else setError("Unexpected Error.");
		} finally {
			setUpdatingStatus(false);
		}
	};

	return (
		<ArtistFormStyled>
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
							<span className="text-[1.5rem] leading-[1]">Update Artist</span>
						</div>
						<div>
							<button onClick={() => setArtistId(null)}>
								<span className="text-[1.5rem] leading-[1]">x</span>
							</button>
						</div>
					</div>
					<div className="target">
						<form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
							<div className="image">
								<img src={image ?? ""} alt={artist?.slug} />
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
						</form>
					</div>
				</React.Fragment>
			)}
		</ArtistFormStyled>
	);
}
