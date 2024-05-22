"use client";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./ArtworkForm.module.scss";

type Inputs = {
	title: string;
	slug: string;
	imageURL: string;
	period: string;
	year: string;
	history: string;
};

export default function ArtworkForm() {
	const { register, handleSubmit } = useForm<Inputs>();
	const artist = useRef<HTMLSelectElement>(null);
	const museum = useRef<HTMLSelectElement>(null);

	const onSubmit: SubmitHandler<Inputs> = function (data) {
		const all = { ...data, artistId: artist.current?.value, museumId: museum.current?.value };
		console.log(all);
	};
	return (
		<div className={s.focus}>
			<div className={s.head}>
				<div>
					<span className="text-[1.5rem]">Update Artwork</span>
				</div>
				<div>
					<span className="text-[1.5rem]">x</span>
				</div>
			</div>
			<div className={s.artwork}>
				<div className={s.image}></div>
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
									<option value="null">Artist</option>
									<option value={1}>opt</option>
									<option value={2}>opt</option>
								</select>
								<select ref={museum} name="museum" id="museum">
									<option value="null">Museum</option>
									<option value={1}>opt</option>
									<option value={2}>opt</option>
								</select>
								<textarea
									{...register("history")}
									name="history"
									placeholder="History"
									id="history"></textarea>
							</div>
						</div>
						<div className={s.buttons}>
							<button type="submit">Save Changes</button>
							<button>Discard Changes</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
