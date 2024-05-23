"use client";
import { useUpdateArtwork } from "@/app/_contexts/UpdateArtworkContext";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import s from "./ArtworkForm.module.scss";
import { AxiosError } from "axios";

type Inputs = {
	title: string | null;
	slug: string | null;
	imageURL: string | null;
	period: string | null;
	year: number | null;
	history: string | null;
};

export default function ArtworkForm() {
	const artist = useRef<HTMLSelectElement>(null);
	const museum = useRef<HTMLSelectElement>(null);
	const [updating, setUpdatingStatus] = useState<boolean>(false);
	const { artwork, museums, artists, isReadyToUpdate, setArtworkId, setArtwork, error, setError } = useUpdateArtwork();

	const { register, handleSubmit } = useForm<Inputs>({
		values: {
			title: artwork?.title ?? null,
			history: artwork?.history ?? null,
			imageURL: artwork?.imageURL ?? null,
			period: artwork?.period ?? null,
			slug: artwork?.slug ?? null,
			year: artwork?.year ?? null,
		},
	});

	const onSubmit: SubmitHandler<Inputs> = async function (data) {
		try {
			if (artwork?.artworkId) {
				setUpdatingStatus(true);
				const artistId = artist.current ? parseInt(artist.current.value) : null;
				const museumId = museum.current ? parseInt(museum.current.value) : null;
				const update = {
					...data,
					artistId: !Number.isNaN(artistId) ? artistId : null,
					museumId: !Number.isNaN(museumId) ? museumId : null,
				};
				const request = await ArtworkRequest.Update(artwork!.artworkId, update);
				if (request) setArtwork(request);
			} else setError("Unable to find artwork ID.");
		} catch (error) {
			if (error instanceof Error) setError(error.message);
			else setError("Unexpected Error.");
		} finally {
			setUpdatingStatus(false);
		}
	};

	return (
		<div className={s.focus}>
			{isReadyToUpdate == false && error == null ? (
				<span className="animate-spin h-fit w-fit">
					<VscLoading fill="white" size={50} />
				</span>
			) : error ? (
				<span className="animate-spin text-[1.25rem] max-w-[70%] ">{error}</span>
			) : (
				<>
					<div className={s.head}>
						<div className="h-fit">
							<span className="text-[1.5rem] leading-[1]">Update Artwork</span>
						</div>
						<div>
							<button onClick={() => setArtworkId(null)}>
								<span className="text-[1.5rem] leading-[1]">x</span>
							</button>
						</div>
					</div>
					<div className={s.artwork}>
						<div className={s.image}>
							<img src={artwork?.imageURL} alt={artwork?.slug} />
						</div>
						<div>
							<form action="post" className={s.form} onSubmit={handleSubmit(onSubmit)}>
								<div className="flex gap-[10px]">
									<div className="flex flex-col gap-[10px]">
										<input {...register("title")} type="text" placeholder="Title" />
										<input {...register("slug")} type="text" placeholder="Slug" />
										<input {...register("year")} type="text" placeholder="Year" />
										<input {...register("period")} type="text" placeholder="Period" />
										<input {...register("imageURL")} type="text" placeholder="Image URL" />
										<select ref={artist} name="artist" id="artist">
											<option>Artist</option>
											{artists?.map((artist, index) => {
												return (
													<option key={`${artist.slug}${index}`} value={artist.artistId}>
														{artist.name}
													</option>
												);
											})}
										</select>
										<select ref={museum} name="museum" id="museum">
											<option>Museum</option>
											{museums?.map((museum, index) => {
												return (
													<option key={`${museum.name}${index}`} value={museum.museumId}>
														{museum.name}
													</option>
												);
											})}
										</select>
										<textarea
											{...register("history")}
											name="history"
											placeholder="History"
											id="history"></textarea>
									</div>
								</div>
								<div className={s.buttons}>
									<button disabled={updating} type="submit" className="flex justify-center items-center">
										{updating ? (
											<span className="animate-spin h-fit">
												<VscLoading size={25} />
											</span>
										) : (
											<span>Save Changes</span>
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
