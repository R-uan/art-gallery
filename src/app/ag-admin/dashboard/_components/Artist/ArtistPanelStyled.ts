import styled from "styled-components";

export const ArtistPanelStyled = styled.div`
	gap: 20px;
	flex-grow: 1;
	height: 100%;
	display: flex;
	flex-direction: column;

	.create {
		height: 35px;
		width: 170px;
		background-color: red;
		button {
			height: 100%;
			padding: 5px 0;
			border-radius: 3px;
			width: 100%;
			background-color: #00f0ff;
			span {
				line-height: 1;
				color: black;
				font-size: 1.25rem;
			}
		}
	}

	& > div:nth-child(2) {
		flex-grow: 1;
		padding: 10px;
		display: flex;
		flex-direction: column;

		& > div:first-child {
			width: 100%;
			padding: 15px;
			display: flex;
			height: fit-content;
			justify-content: center;

			.artworks {
				gap: 7px;
				display: grid;
				height: fit-content;
				grid-template-columns: repeat(6, auto);
				grid-template-rows: repeat(2, 230px);
			}
		}
	}
`;
