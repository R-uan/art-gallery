import { AxiosError } from "axios";
import { IArtist } from "@/interfaces/Artist/IArtist";
import { createContext, SetStateAction, useContext, useEffect, useState } from "react";
import ArtistRequest from "@/scripts/Requests/ArtistRequest";

interface IUpdateArtistContext {
	error: string | null;
	artist: IArtist | null;
	artistId: number | null;
	isReadyToUpdate: boolean | null;
	setArtist: React.Dispatch<SetStateAction<IArtist | null>>;
	setError: React.Dispatch<SetStateAction<string | null>>;
	setArtistId: React.Dispatch<SetStateAction<number | null>>;
}

export const UpdateArtistContext = createContext<IUpdateArtistContext | null>(null);

export default function UpdateArtistProvider({ children }: { children: React.ReactNode }) {
	const [error, setError] = useState<string | null>(null);
	const [artist, setArtist] = useState<IArtist | null>(null);
	const [artistId, setArtistId] = useState<number | null>(null);
	const [isReadyToUpdate, setReady] = useState<boolean | null>(null);

	useEffect(() => {
		async function Fetch() {
			try {
				if (artistId) {
					setReady(false);
					const request = await ArtistRequest.OneById(artistId);
					if (request) {
						setReady(true);
						setArtist(request);
					}
				} else {
					setReady(null);
					setArtist(null);
					setArtistId(null);
				}
			} catch (error) {
				if (error instanceof AxiosError) setError(error.message);
				else setError("Unexpected Error.");
			}
		}
		Fetch();
	}, [artistId]);

	return (
		<UpdateArtistContext.Provider value={{ artist, artistId, setArtistId, error, isReadyToUpdate, setArtist, setError }}>
			{children}
		</UpdateArtistContext.Provider>
	);
}

export function useUpdateArtist() {
	const context = useContext(UpdateArtistContext);
	if (context == null) throw Error("UpdateArtistContext is null. Verify if you're consuming the context correctly.");
	return context;
}
