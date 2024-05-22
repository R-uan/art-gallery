import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import public_instance from "./PublicInstance";
import Cookies from "js-cookie";
import UnauthorizedError from "./UnauthorizedError";
export default class AuthenticationRequest {
	public static async Authenticate(username: string, password: string) {
		try {
			const credentials = btoa(`${username}:${password}`);
			const config: AxiosRequestConfig = { headers: { Authorization: `Basic ${credentials}` } };
			const request = await public_instance.get("/auth", config);
			if (request.data != null) {
				Cookies.set("auth", request.data);
				return true;
			}
			throw Error("Unexpected Behaviour");
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.status == 401) throw new UnauthorizedError("Incorrect credentials.", 401);
				throw Error("Unexpected Error");
			}
			throw Error("Unexpected Error");
		}
	}
}
