"use client";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";
import s from "./ArtistForm.module.scss";
import { useUpdateArtist } from "./UpdateArtistContext";
import { IArtist } from "@/interfaces/IArtist";
import { useForm } from "react-hook-form";

type Inputs = {
	name: string | null;
	slug: string | null;
	country: string | null;
	movement: string | null;
	biography: string | null;
	profession: string | null;
};
export default function UpdateArtistForm() {
	const [updating, setUpdatingStatus] = useState<boolean>(false);
	const { artist, isReadyToUpdate, error, setArtistId } = useUpdateArtist();
	const { register, handleSubmit } = useForm<Inputs>({
		values: {
			name: artist?.name ?? null,
			slug: artist?.slug ?? null,
			movement: artist?.movement ?? null,
			country: artist?.country ?? null,
			biography: artist?.biography ?? null,
			profession: artist?.profession ?? null,
		},
	});
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
							<button onClick={() => setArtistId(null)}>
								<span className="text-[1.5rem] leading-[1]">x</span>
							</button>
						</div>
					</div>
					<div className={s.artwork}>
						{/* <div className={s.image}>
							<img src={artwork?.imageURL} alt={artwork?.slug} />
						</div> */}
						<div>
							<form action="post" className={s.form}>
								<div className="flex gap-[10px]">
									<div className="flex flex-col gap-[10px]">
										<input {...register("name")} type="text" placeholder="Name" />
										<input {...register("slug")} type="text" placeholder="Slug" />
										<input {...register("country")} type="text" placeholder="Country" />
										<input {...register("movement")} type="text" placeholder="Movement" />
										<input {...register("profession")} type="text" placeholder="Profession" />
										<textarea {...register("biography")} placeholder="Biography" />
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
