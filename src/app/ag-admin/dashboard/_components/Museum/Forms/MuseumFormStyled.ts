import styled from "styled-components";

export const MuseumFormStyled = styled.div`
	top: 50%;
	left: 50%;
	z-index: 101;
	display: flex;
	width: fit-content;
	position: absolute;
	border-radius: 3px;
	height: fit-content;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: #050a0e;
	outline: 1.5px solid #11202d;
	transform: translate(-50%, -50%);

	.head {
		width: 100%;
		height: 6vh;
		display: flex;
		color: #fefefe;
		padding: 0px 20px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #11202d;
	}

	.target {
		gap: 10px;
		height: 50vh;
		display: flex;
		padding: 20px;
		border-radius: 3px;
		width: fit-content;
		align-content: center;
		justify-content: center;

		form {
			gap: 20px;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.image {
				height: 100%;
				aspect-ratio: 1/1;
				border-radius: 3px;
				outline: 1px solid black;
				background-color: #091118;

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}

			.inputs {
				gap: 10px;
				display: flex;
				margin-bottom: 10px;
				flex-direction: column;

				& > div {
					gap: 15px;
					align-items: flex-end;
					display: flex;
					& > div {
						gap: 2px;
						display: flex;
						flex-direction: column;
					}
				}
			}

			.buttons {
				flex: 1 1 0%;
				gap: 10px;
				display: flex;

				button {
					width: 100%;
					color: black;
					display: flex;
					padding: 7px 20px;
					font-size: 1.2rem;
					border-radius: 3px;
					align-items: center;
					justify-content: center;
					background-color: #00f0ff;
				}
			}
		}
	}

	label {
		color: white;
		line-height: 1;
		font-size: 1.25rem;
		display: inline-block;
	}

	input {
		color: #efefe0;
		width: 25vw;
		height: 5vh;
		padding-left: 7px;
		font-size: 1.5rem;
		border-radius: 3px;
		background-color: #091118;
	}

	textarea {
		color: #efefe0;
		max-height: 140px;
		min-height: 140px;
		width: 25vw;
		padding-left: 7px;
		font-size: 1.2rem;
		border-radius: 3px;
		background-color: #091118;
	}
`;
