"use client";
import { setArtworkListingData, setArtworkListingError, setArtworkListingFetch } from "@/app/_contexts/_slices/ArtworkListingSlice";
import ArtworkRequest from "@/scripts/Requests/ArtworkRequest";
import UrlQueryBuilder from "@/scripts/UrlQueryBuilder";
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
	const { register, handleSubmit } = useForm<Input>();
	const options = useRef<HTMLSelectElement>(null);
	const periods = useRef<HTMLSelectElement>(null);
	const setState = useDispatch();
	const onSubmit: SubmitHandler<Input> = async (data) => {
		const queryBuilder = new UrlQueryBuilder();
		if (options.current && options.current.value != "") {
			queryBuilder.addFilter(options.current.value, data.input);
		}
		if (periods.current && periods.current.value != "") {
			queryBuilder.addFilter("period", periods.current.value);
		}
		const query = queryBuilder.build();
		if (query != null) {
			try {
				setState(setArtworkListingFetch(true));
				const artworks = await ArtworkRequest.QuerySearch(query);
				console.log(artworks);
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
