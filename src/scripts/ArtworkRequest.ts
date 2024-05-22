import { config } from "dotenv";
import public_instance from "./PublicInstance";
import { IArtwork, IPartialArtwork } from "@/interfaces/IArtwork";
import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
config();

export default class ArtworkRequest {
	public static async PaginatedArtworks(page?: number, page_size?: number): Promise<IPaginatedResponse<IPartialArtwork>> {
		const request = await public_instance.get(
			`/artwork/partial/paginate?page_index=${page ?? 1}&page_size${page_size ?? 12}`
		);
		const response_body = request.data;
		return response_body;
	}

	public static async GetArtworkBySlug(slug: string) {
		const request = await public_instance.get(`/artwork/${slug}`);
		const response_body: IArtwork = request.data;
		return response_body;
	}
}
