import { IPartialArtist } from "@/interfaces/IArtist";
import public_instance from "./PublicInstance";

export default class ArtistRequest {
	public static async Partial(): Promise<IPartialArtist[]> {
		const request = await public_instance.get("/artist/partial");
		const response_body: IPartialArtist[] = request.data;
		return response_body;
	}
}
