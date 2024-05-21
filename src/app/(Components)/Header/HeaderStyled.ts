import styled from "styled-components";

export const HeaderStyled = styled.header<{ $transparent?: boolean; $position?: string }>`
	top: 0;
	width: 100%;
	z-index: 101;
	height: 10vh;
	display: flex;
	position: ${(props) => (props.$position ? props.$position : "relative")};
	align-items: center;
	padding: 0 80px 0 80px;
	justify-content: space-between;
	background-color: transparent;
	box-shadow: 0px 1px 10px 0px rgba(230, 217, 208, 0.3);

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
`;
