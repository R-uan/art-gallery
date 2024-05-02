import styled from "styled-components";

export const HeaderStyled = styled.header<{ $transparent?: boolean }>`
	top: 0;
	width: 100%;
	z-index: 101;
	height: 12vh;
	display: flex;
	position: ${(props) => (props.$transparent ? "absolute" : "sticky")};
	align-items: center;
	padding: 0 80px 0 80px;
	justify-content: space-between;
	background-color: ${(props) => (props.$transparent ? "transparent" : "#0D090A")};

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
