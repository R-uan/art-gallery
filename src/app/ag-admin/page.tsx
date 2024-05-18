"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./page.module.scss";
import AuthenticationRequest from "@/scripts/AuthenticationRequest";
type Inputs = { username: string; password: string };
export default function AdminPanel() {
	const { register, handleSubmit } = useForm<Inputs>();
	async function Submit(data: Inputs) {
		AuthenticationRequest.Authenticate(data.username, data.password);
	}
	return (
		<body className={s.body}>
			<main className={s.main}>
				<div className={s.login}>
					<form action="POST" onSubmit={handleSubmit(Submit)}>
						<div className={s.input_fields}>
							<input {...register("username")} type="text" name="username" placeholder="Username" required />
							<input
								{...register("password")}
								type="password"
								name="password"
								placeholder="Password"
								required
							/>
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
		</body>
	);
}
