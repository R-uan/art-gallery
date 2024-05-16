import { config } from "dotenv";
import public_instance from "./PublicInstance";
import { IArtwork } from "@/interfaces/IArtwork";
config();

export default class ArtworkRequest {
	public static async GetArtworkBySlug(slug: string) {
		const request = await public_instance.get(`/artwork/${slug}`);
		console.log(request);
		const response_body: IArtwork = request.data;
		return response_body;
	}
}
