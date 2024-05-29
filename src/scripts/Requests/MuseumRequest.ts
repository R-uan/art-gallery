import { IPartialMuseum } from "@/interfaces/IMuseum";
import public_instance from "../PublicInstance";

export default class MuseumRequest {
	public static async Partial(): Promise<IPartialMuseum[]> {
		const request = await public_instance.get("/museum/partial");
		const response_body: IPartialMuseum[] = request.data;
		return response_body;
	}
}
