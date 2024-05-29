import IMuseum from "@/interfaces/Museum/IMuseum";
import MuseumRequest from "@/scripts/Requests/MuseumRequest";
import { AxiosError } from "axios";
import { createContext, SetStateAction, useContext, useEffect, useState } from "react";

interface IUpdateMuseumContext {
	error: string | null;
	museum: IMuseum | null;
	museumId: number | null;
	isReadyToUpdate: boolean | null;
	setMuseum: React.Dispatch<SetStateAction<IMuseum | null>>;
	setError: React.Dispatch<SetStateAction<string | null>>;
	setMuseumId: React.Dispatch<SetStateAction<number | null>>;
}

export const UpdateMuseumContext = createContext<IUpdateMuseumContext | null>(null);

export default function UpdateMuseumProvider({ children }: { children: React.ReactNode }) {
	const [error, setError] = useState<string | null>(null);
	const [museum, setMuseum] = useState<IMuseum | null>(null);
	const [museumId, setMuseumId] = useState<number | null>(null);
	const [isReadyToUpdate, setReady] = useState<boolean | null>(null);

	useEffect(() => {
		async function Fetch() {
			try {
				if (museumId) {
					setReady(false);
					const request = await MuseumRequest.OneById(museumId);
					if (request) {
						setReady(true);
						setMuseum(request);
					}
				} else {
					setReady(null);
					setMuseum(null);
					setMuseumId(null);
				}
			} catch (error) {
				if (error instanceof AxiosError) setError(error.message);
				else setError("Unexpected Error.");
			}
		}
		Fetch();
	}, [museumId]);

	return (
		<UpdateMuseumContext.Provider value={{ museum, museumId, setMuseumId, error, isReadyToUpdate, setMuseum, setError }}>
			{children}
		</UpdateMuseumContext.Provider>
	);
}

export function useUpdateMuseum() {
	const context = useContext(UpdateMuseumContext);
	if (context == null) throw Error("UpdateMuseumContext is null. Verify if you're consuming the context correctly.");
	return context;
}
