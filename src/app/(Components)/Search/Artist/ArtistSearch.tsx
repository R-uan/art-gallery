import { IoSearchSharp } from "react-icons/io5";
import { eras } from "../../../(Components)/Home/Eras";
import { ArtistSearchStyled } from "./ArtistSearchStyled";

export default function ArtistSearch() {
	return (
		<ArtistSearchStyled>
			<form action="get">
				<div className="search">
					<input type="text" placeholder="Artist Name" />
					<button type="submit">
						<IoSearchSharp className="search_icon" />
					</button>
				</div>
			</form>
		</ArtistSearchStyled>
	);
}
