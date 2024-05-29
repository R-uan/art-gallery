import styled from "styled-components";

export const MuseumPanelStyled = styled.div`
	gap: 20px;
	flex-grow: 1;
	height: 100%;
	display: flex;
	flex-direction: column;

	& > div:nth-child(2) {
		flex-grow: 1;
		display: flex;
		padding: 10px;
		flex-direction: column;

		& > div:first-child {
			width: 100%;
			padding: 15px;
			display: flex;
			height: fit-content;
			align-items: center;
			flex-direction: column;

			.listing {
				gap: 7px;
				display: grid;
				width: fit-content;
				height: fit-content;
				grid-auto-rows: 7vh;
				justify-items: center;
				flex-direction: column;
				grid-template-columns: repeat(3, 27vw);
			}
		}
	}

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

	.lista {
		height: 7vh;
		width: 27vw;
		display: flex;
		padding: 0px 30px;
		align-items: center;
		border-radius: 3px;
		outline: 1px solid #e0e0e0;
		background-color: #fafafa;

		.info {
			display: flex;
			width: 100%;
			justify-content: space-between;
			span {
				font-size: 1.5rem;
				line-height: 1;
			}

			& > div:first-child {
				gap: 35px;
				display: flex;

				& > div {
					& > label {
						line-height: 1;
					}
					display: flex;
					flex-direction: column;
				}
			}

			& > div:last-child {
				display: flex;
				gap: 30px;
			}
		}
	}
`;
