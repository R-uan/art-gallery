import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
import { UpdateArtworkRequestBody } from "@/interfaces/Artwork/IUpdateArtworkRequestBody";
import { config } from "dotenv";
import public_instance from "../PublicInstance";
import { IArtwork, IPartialArtwork } from "@/interfaces/Artwork/IArtwork";
import IPostArtworkRequestBody from "@/interfaces/Artwork/IPostArtworkRequestBody";
config();

export default class ArtworkRequest {
	public static async Paginated(page?: number): Promise<IPaginatedResponse<IPartialArtwork>> {
		const request = await public_instance.get(`/artwork/partial/paginate?page_index=${page ?? 1}&page_size=15`);
		const response_body = request.data;
		return response_body;
	}

	public static async GetArtworkBySlug(slug: string) {
		const request = await public_instance.get(`/artwork/${slug}`);
		const response_body: IArtwork = request.data;
		return response_body;
	}

	public static async GetArtworkById(id: number): Promise<IArtwork> {
		const request = await public_instance.get(`/artwork/${id}`);
		const response_body: IArtwork = request.data;
		return response_body;
	}

	public static async Update(id: number, data: UpdateArtworkRequestBody): Promise<IArtwork> {
		const request = await public_instance.patch(`/artwork/${id}`, data);
		if (request.status == 200) {
			const response_body: IArtwork = request.data;
			return response_body;
		} else throw new Error(request.data);
	}

	public static async Post(artwork: IPostArtworkRequestBody) {
		const request = await public_instance.post("/artwork", artwork);
		if (request.status == 200) return true;
		return false;
	}

	public static async Delete(artworkId: number) {
		const request = await public_instance.delete(`/artwork/${artworkId}`);
		if (request.status == 200) return true;
		return false;
	}
}
