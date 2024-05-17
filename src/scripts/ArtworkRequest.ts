import { config } from "dotenv";
import public_instance from "./PublicInstance";
import { IArtwork, IPartialArtwork } from "@/interfaces/IArtwork";
config();

export default class ArtworkRequest {
	public static async GetPartialArtworks() {
		const request = await public_instance.get("/artwork/partial");
		const response_body: IPartialArtwork[] = request.data;
		return response_body;
	}

	public static async GetArtworkBySlug(slug: string) {
		const request = await public_instance.get(`/artwork/${slug}`);
		const response_body: IArtwork = request.data;
		return response_body;
	}
}
