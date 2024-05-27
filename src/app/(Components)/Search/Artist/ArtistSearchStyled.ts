import styled from "styled-components";

export const ArtistSearchStyled = styled.div`
	height: 7vh;
	display: flex;
	position: relative;
	padding: 10px 10px 0 10px;

	& > form {
		gap: 10px;
		display: flex;
		width: fit-content;
		align-items: center;
		height: fit-content;

		.search {
			width: 40vw;
			min-width: 100px;
			display: flex;
			position: relative;
			align-items: center;

			& input {
				width: 100%;
				height: 35px;
				padding-left: 7px;
				padding-right: 7%;
				border-radius: 6px;
				font-size: 1.4rem;
				background-color: #e9e9ed;
			}

			& button {
				right: 1%;
				position: absolute;
			}

			& .search_icon {
				fill: black;
				font-size: 1.75rem;
			}
		}
	}
`;
