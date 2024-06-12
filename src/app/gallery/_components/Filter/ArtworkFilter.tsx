"use client";
import { setArtworkListingData, setArtworkListingError, setArtworkListingFetch } from "@/app/_contexts/_slices/ArtworkListingSlice";
import ArtworkRequest from "@/scripts/Requests/ArtworkRequest";
import UrlQueryBuilder from "@/scripts/UrlQueryBuilder";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { eras } from "../../../(Components)/Home/Eras";
import s from "./ArtworkFilter.module.scss";

type Input = {
	input: string;
};
export default function ArtworkFilter() {
	const router = useRouter();
	const setState = useDispatch();
	const options = useRef<HTMLSelectElement>(null);
	const periods = useRef<HTMLSelectElement>(null);
	const { register, handleSubmit } = useForm<Input>();

	const onSubmit: SubmitHandler<Input> = async (data) => {
		const queryBuilder = new UrlQueryBuilder();
		if (periods.current && periods.current.value != "") {
			queryBuilder.addFilter("period", periods.current.value);
		}
		if (options.current && options.current.value != "") {
			queryBuilder.addFilter(options.current.value, data.input);
		}
		const query = queryBuilder.build();
		if (query != null) {
			try {
				router.push("/gallery" + `?${query}`);
				setState(setArtworkListingFetch(true));
				const artworks = await ArtworkRequest.QuerySearch(query);
				if (artworks) setState(setArtworkListingData(artworks));
			} catch (error) {
				setState(setArtworkListingError(true));
			} finally {
				setState(setArtworkListingFetch(false));
			}
		}
	};

	return (
		<div className={s.filter}>
			<form action="get" onSubmit={handleSubmit(onSubmit)}>
				<div className={s.options}>
					<select ref={periods} name="periods" id="periods">
						<option value="">All Periods</option>
						{eras.map((era) => {
							return (
								<option key={era.toLowerCase()} value={era.toLowerCase()}>
									{era}
								</option>
							);
						})}
					</select>
				</div>
				<div className={s.options}>
					<select ref={options} name="options" id="options">
						<option value="title">Title</option>
						<option value="artist">Artist</option>
					</select>
				</div>
				<div className={s.search}>
					<input {...register("input")} type="text" name="input" id="input" placeholder="Search an Artwork Title/Author" />
					<button type="submit">
						<IoSearchSharp className={s.search_icon} />
					</button>
				</div>
			</form>
		</div>
	);
}
