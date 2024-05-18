import axios, { AxiosError } from "axios";
import public_instance from "./PublicInstance";
import Cookies from "js-cookie";
export default class AuthenticationRequest {
	public static async Authenticate(username: string, password: string) {
		try {
			const request_body = { username, password };
			const request = await public_instance.post("/auth", request_body);
			Cookies.set("auth", request.data);
		} catch (error) {
			if (error instanceof AxiosError) {
			}
		}
	}
}
