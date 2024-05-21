"use client";
import AuthenticationRequest from "@/scripts/AuthenticationRequest";
import UnauthorizedError from "@/scripts/UnauthorizedError";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MessageBox, { Status } from "./MessageBox";
import s from "./page.module.scss";
type Inputs = { username: string; password: string };
export default function AdminPanel() {
	const { register, handleSubmit } = useForm<Inputs>();
	const [message, setMessage] = useState<string>("Provide credentials");
	const [status, setStatus] = useState<Status>(Status.Neutral);

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
					<MessageBox message={message} status={status} />
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
