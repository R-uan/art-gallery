import IMuseum, { IPartialMuseum } from "@/interfaces/Museum/IMuseum";
import public_instance from "../PublicInstance";
import IUpdateMuseumRequestBody from "@/interfaces/Museum/IUpdateMuseumRequestBody";
import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
import IPostMuseumRequestBody from "@/interfaces/Museum/IPostMuseumRequestBody";

export default class MuseumRequest {
	public static async Partial(): Promise<IPartialMuseum[]> {
		const request = await public_instance.get("/museum/partial");
		const response_body: IPartialMuseum[] = request.data;
		return response_body;
	}

	public static async OneById(id: number) {
		const request = await public_instance.get(`/museum/${id}`);
		const response_body: IMuseum = request.data;
		return response_body;
	}

	public static async Post(museum: IPostMuseumRequestBody) {
		const request = await public_instance.post("/museum", museum);
		if (request.status == 200) return true;
		return false;
	}

	public static async Paginated(page?: number): Promise<IPaginatedResponse<IPartialMuseum>> {
		const request = await public_instance.get(`/museum/partial/paginate?page_index=${page ?? 1}&page_size=15`);
		const response_body = request.data;
		return response_body;
	}

	public static async Update(id: number, update: IUpdateMuseumRequestBody) {
		const request = await public_instance.patch(`/museum/${id}`, update);
		if (request.status == 200) return true;
		return false;
	}

	public static async Delete(id: number) {
		const request = await public_instance.delete(`/museum/${id}`);
		if (request.status == 200) return true;
		return false;
	}
}
