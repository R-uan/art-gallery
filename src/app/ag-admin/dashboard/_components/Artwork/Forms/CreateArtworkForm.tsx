import ArtworkRequest from "@/scripts/Requests/ArtworkRequest";
import { SetStateAction, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import { useCreateArtwork } from "../Contexts/CreateArtworkContext";
import { ArtworkFormStyled } from "./ArtworkFormStyled";

type Inputs = {
	title: string;
	slug: string;
	imageURL: string;
	period: string;
	year: number;
	history: string;
};

export default function CreateArtworkForm({ refresh, setRefresh }: { refresh: number; setRefresh: React.Dispatch<SetStateAction<number>> }) {
	const artist = useRef<HTMLSelectElement>(null);
	const museum = useRef<HTMLSelectElement>(null);
	const [saving, setSavingStatus] = useState<boolean>(false);

	const { register, handleSubmit, watch } = useForm<Inputs>({});
	const { museums, artists, error, setError, setOpen } = useCreateArtwork();
	const image = watch("imageURL", "");

	const onSubmit: SubmitHandler<Inputs> = async function (data) {
		try {
			setSavingStatus(true);
			const artistId = artist.current ? parseInt(artist.current.value) : 0;
			const museumId = museum.current ? parseInt(museum.current.value) : 0;
			data.slug = data.slug.split(" ").join("-").toLowerCase();
			const artwork = { ...data, artistId, museumId };
			const request = await ArtworkRequest.Post(artwork);
			if (request) {
				setRefresh(refresh + 1);
				setOpen(false);
			}
		} catch (error) {
			if (error instanceof Error) setError(error.message);
			else setError("Unexpected Error.");
		} finally {
			setSavingStatus(false);
		}
	};

	return (
		<ArtworkFormStyled>
			{error ? (
				<span className="animate-spin text-[1.25rem] max-w-[70%] ">{error}</span>
			) : (
				<>
					<div className="head">
						<div className="h-fit">
							<span className="text-[1.5rem] leading-[1]">Save Artwork</span>
						</div>
						<div>
							<button onClick={() => setOpen(false)}>
								<span className="text-[1.5rem] leading-[1]">x</span>
							</button>
						</div>
					</div>
					<div className="artwork">
						<div className="image">
							<img src={image} alt="image preview" />
						</div>
						<div>
							<form action="post" onSubmit={handleSubmit(onSubmit)}>
								<div className="flex gap-[10px]">
									<div className="flex flex-col gap-[10px]">
										<input {...register("title")} type="text" placeholder="Title" required />
										<input {...register("slug")} type="text" placeholder="Slug" required />
										<input {...register("year")} type="text" placeholder="Year" />
										<input {...register("period")} type="text" placeholder="Period" required />
										<input {...register("imageURL")} type="text" placeholder="Image URL" required />
										<select ref={artist} name="artist" id="artist" required>
											<option>Artist</option>
											{artists?.map((artist, index) => {
												return (
													<option key={`${artist.slug}${index}`} value={artist.artistId}>
														{artist.name}
													</option>
												);
											})}
										</select>
										<select ref={museum} name="museum" id="museum" required>
											<option>Museum</option>
											{museums?.map((museum, index) => {
												return (
													<option key={`${museum.name}${index}`} value={museum.museumId}>
														{museum.name}
													</option>
												);
											})}
										</select>
										<textarea {...register("history")} name="history" placeholder="History" id="history"></textarea>
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
							</form>
						</div>
					</div>
				</>
			)}
		</ArtworkFormStyled>
	);
}
