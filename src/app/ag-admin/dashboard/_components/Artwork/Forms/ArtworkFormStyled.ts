import styled from "styled-components";

export const ArtworkFormStyled = styled.div`
	top: 50%;
	left: 50%;
	width: 50vw;
	height: 90vh;
	z-index: 101;
	display: flex;
	position: absolute;
	border-radius: 3px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: #050a0e;
	outline: 1.5px solid #11202d;
	transform: translate(-50%, -50%);

	.head {
		width: 100%;
		height: 50px;
		display: flex;
		color: #fefefe;
		padding: 0px 30px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #11202d;
	}

	.artwork {
		flex: 1;
		gap: 10px;
		display: flex;
		padding: 20px;
		border-radius: 3px;
		align-content: center;
		justify-content: center;

		& > div:last-child {
			flex: 1;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			form {
				gap: 20px;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.buttons {
					gap: 10px;
					display: flex;
					button {
						width: 100%;
						color: black;
						padding: 7px 20px;
						font-size: 1.2rem;
						border-radius: 3px;
						background-color: #00f0ff;
					}
				}

				input,
				select {
					color: #efefe0;
					height: 35px;
					width: 350px;
					padding-left: 7px;
					font-size: 1.5rem;
					border-radius: 3px;
					background-color: #091118;
				}

				textarea {
					color: #efefe0;
					max-height: 140px;
					min-height: 140px;
					width: 350px;
					padding-left: 7px;
					font-size: 1.2rem;
					border-radius: 3px;
					background-color: #091118;
				}
			}
		}

		.image {
			height: 100%;
			aspect-ratio: 2/3;
			border-radius: 3px;
			background-color: #091118;
			outline: 1px solid black;

			& > img {
				object-fit: contain;
				width: 100%;
				height: 100%;
			}
		}
	}
`;
