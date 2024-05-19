import s from "./ArtworkFilter.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { eras } from "../../../(Components)/Home/Eras";

export default function ArtworkFilter() {
	return (
		<div className={s.filter}>
			<form action="get">
				<div className={s.options}>
					<select name="periods" id="periods">
						<option value="all">All Periods</option>
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
					<select name="periods" id="periods">
						<option value="title">Title</option>
						<option value="author">Author</option>
					</select>
				</div>
				<div className={s.search}>
					<input type="text" placeholder="Search an Artwork Title/Author" />
					<button type="submit">
						<IoSearchSharp className={s.search_icon} />
					</button>
				</div>
				<div className={s.year_search}>
					<input
						pattern="[0-9]*"
						placeholder="YYYY"
						minLength={1}
						maxLength={4}
						type="number"
						min={0}
						max={2020}
					/>
					<span>to</span>
					<input
						pattern="[0-9]*"
						placeholder="YYYY"
						minLength={1}
						maxLength={4}
						type="number"
						min={0}
						max={2020}
					/>
				</div>
			</form>
		</div>
	);
}
