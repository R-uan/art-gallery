import public_instance from "./PublicInstance";
import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
import { IArtist, IPartialArtist } from "@/interfaces/Artist/IArtist";
import IPostArtistRequestBody from "@/interfaces/Artist/IPostArtistRequestBody";
import IUpdateArtistRequestBody from "@/interfaces/Artist/IUpdateArtistRequestBody";

export default class ArtistRequest {
	public static async Partial(): Promise<IPartialArtist[]> {
		const request = await public_instance.get("/artist/partial");
		const response_body: IPartialArtist[] = request.data;
		return response_body;
	}

	public static async Paginated(page?: number): Promise<IPaginatedResponse<IPartialArtist>> {
		const request = await public_instance.get(`/artist/partial/paginate?page_index=${page ?? 1}&page_size=15`);
		const response_body = request.data;
		return response_body;
	}

	public static async OneById(id: number): Promise<IArtist> {
		const request = await public_instance.get(`/artist/${id}`);
		const response_body: IArtist = request.data;
		return response_body;
	}

	public static async Update(id: number, artist: IUpdateArtistRequestBody) {
		return false;
	}

	public static async Post(artist: IPostArtistRequestBody) {
		const request = await public_instance.post("/artist", artist);
		if (request.status == 200) return true;
		return false;
	}
}
