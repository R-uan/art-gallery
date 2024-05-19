import { useState } from "react";
import styled from "styled-components";
export enum Status {
	Error = "#F71735",
	Neutral = "#dbd8d0",
	Success = "#23CE6B",
	Warning = "#FADF63",
}

const MessageBoxStyled = styled.div<{ $status: Status }>`
	width: 70%;
	height: 5%;
	display: flex;
	color: black;
	border-radius: 3px;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.$status};
`;

export default function MessageBox({ message, status }: { message: string; status: Status }) {
	return (
		<MessageBoxStyled $status={status}>
			<span className="text-[1.25rem] leading-snug">{message}</span>
		</MessageBoxStyled>
	);
}
