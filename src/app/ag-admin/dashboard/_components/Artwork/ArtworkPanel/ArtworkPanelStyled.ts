import styled from "styled-components";

export const ArtworkPanelStyled = styled.div`
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

			.artworks {
				gap: 7px;
				display: grid;
				width: fit-content;
				height: fit-content;
				justify-items: center;
				grid-auto-rows: 250px;
				grid-template-columns: repeat(5, auto);
			}
		}
	}

	.teste {
		margin-top: 30px;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.exposition {
		width: 90%;
		columns: 5;
		margin: 5px 5px;
		column-gap: 10px;
		height: fit-content;
		justify-content: center;
		padding: 5px;
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

	.img_box {
		width: 250px;
		height: 250px;
		position: relative;
		border-radius: 15px;

		& > .info {
			left: 0;
			bottom: 0;
			opacity: 0;
			width: 100%;
			height: 100%;
			display: flex;
			padding: 20px;
			color: white;
			position: absolute;
			border-radius: 15px;
			flex-direction: column;
			justify-content: space-between;
			transition: opacity ease-in-out 0.7s;
			background-color: rgba(0, 0, 0, 0.5);

			& > div:first-child {
				& > span {
					line-height: 1;
					font-size: 1.5rem;
				}
			}

			& > div:last-child {
				& > h1 {
					font-weight: bold;
					line-height: 1;
					font-size: 1.75rem;
				}

				& > h3 {
					font-weight: 200;
					line-height: 1;
					font-size: 1.3rem;
				}
			}
		}

		& img {
			width: 100%;
			height: 100%;
			border-radius: 15px;
			object-fit: cover;
		}
	}

	.img_box:hover {
		& > .info {
			opacity: 1;
			transition: opacity ease-in-out 0.5s;
		}
	}
`;
