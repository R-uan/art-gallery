import styled from "styled-components";

export const ArtworkPanelStyled = styled.div`
	gap: 20px;
	flex-grow: 1;
	height: 100%;
	display: flex;
	flex-direction: column;

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
