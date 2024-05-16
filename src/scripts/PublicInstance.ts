import axios from "axios";
import { config } from "dotenv";
config();

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
if (!API_URL) throw new Error("Define the enviroment variable of the api.");
const public_instance = axios.create({ baseURL: API_URL });
export default public_instance;
