"use client";
import AuthenticationRequest from "@/scripts/Requests/AuthenticationRequest";
import UnauthorizedError from "@/scripts/UnauthorizedError";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import s from "./page.module.scss";
import { Status } from "./Status";

type Inputs = { username: string; password: string };

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

export default function AdminPanel() {
	const { register, handleSubmit } = useForm<Inputs>();
	const [status, setStatus] = useState<Status>(Status.Neutral);
	const [message, setMessage] = useState<string>("Provide credentials");

	async function Submit(data: Inputs) {
		try {
			const authenticated = await AuthenticationRequest.Authenticate(data.username, data.password);
			if (authenticated == true) {
				setStatus(Status.Success);
				setMessage("Login Successful.");
			}
		} catch (error) {
			if (error instanceof UnauthorizedError) {
				setMessage(error.message);
				setStatus(Status.Warning);
			} else if (error instanceof Error) {
				setMessage(error.message);
				setStatus(Status.Error);
			}
		}
	}
	return (
		<main className={s.main}>
			<div className={s.login}>
				<form action="POST" onSubmit={handleSubmit(Submit)}>
					<MessageBoxStyled $status={status}>
						<span className="text-[1.25rem] leading-snug">{message}</span>
					</MessageBoxStyled>
					<div className={s.input_fields}>
						<input {...register("username")} type="text" name="username" placeholder="Username" required />
						<input {...register("password")} type="password" name="password" placeholder="Password" required />
					</div>
					<div className={s.other}>
						<button>Sign in as Guest</button>
					</div>
					<div className={s.submit}>
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
			<div className={s.big_image}></div>
		</main>
	);
}
