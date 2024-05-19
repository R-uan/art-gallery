import axios, { AxiosError } from "axios";
import public_instance from "./PublicInstance";
import Cookies from "js-cookie";
import UnauthorizedError from "./UnauthorizedError";
export default class AuthenticationRequest {
	public static async Authenticate(username: string, password: string) {
		try {
			const request_body = { username, password };
			const request = await public_instance.post("/auth", request_body);
			if (request.data != null) {
				Cookies.set("auth", request.data);
				return true;
			}
			throw Error("Unexpected Behaviour");
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.status == 401) throw new UnauthorizedError("Incorrect credentials.", 401);
				console.log(error);
				throw Error("Unexpected Error");
			}
			console.log(error);
			throw Error("Unexpected Error");
		}
	}
}
