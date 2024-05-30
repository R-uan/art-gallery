import styled from "styled-components";

export const HeaderStyled = styled.header<{ $transparent?: boolean; $position?: string }>`
	top: 0;
	width: 100%;
	z-index: 101;
	height: 10vh;
	display: flex;
	align-items: center;
	padding: 0 80px 0 80px;
	background-color: transparent;
	justify-content: space-between;
	position: ${(props) => (props.$position ? props.$position : "relative")};

	& > nav {
		display: flex;
		align-items: center;
		width: fit-content;
		height: fit-content;

		& > ul {
			gap: 25px;
			width: 100%;
			display: flex;

			li {
				color: #decfd3;
				line-height: 1;
				font-size: 1.75rem;
				transition: transform ease-in-out 0.2s;
			}

			li:hover {
				transform: scale(1.2);
				transition: transform ease-in-out 0.2s;
			}
		}
	}

	.socials {
		gap: 25px;
		display: flex;
	}

	:after {
		left: 50%;
		bottom: 0;
		width: 92%;
		content: "";
		height: 1px;
		position: absolute;
		transform: translateX(-50%);
		background-color: white;
	}
`;
