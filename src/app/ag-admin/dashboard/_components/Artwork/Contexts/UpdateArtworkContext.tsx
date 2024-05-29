import { IPartialArtist } from "@/interfaces/Artist/IArtist";
import { IArtwork } from "@/interfaces/Artwork/IArtwork";
import { IPartialMuseum } from "@/interfaces/IMuseum";
import ArtistRequest from "@/scripts/Requests/ArtistRequest";
import ArtworkRequest from "@/scripts/Requests/ArtworkRequest";
import MuseumRequest from "@/scripts/Requests/MuseumRequest";
import { AxiosError } from "axios";
import { createContext, SetStateAction, useContext, useEffect, useState } from "react";

interface IUpdateArtwork {
	artworkId: number | null;
	setArtwork: React.Dispatch<SetStateAction<IArtwork | null>>;
	setArtworkId: React.Dispatch<SetStateAction<number | null>>;
	setError: React.Dispatch<SetStateAction<string | null>>;
	artwork: IArtwork | null;
	artists: IPartialArtist[] | null;
	museums: IPartialMuseum[] | null;
	isReadyToUpdate: boolean | null;
	error: string | null;
}

export const UpdateArtworkContext = createContext<IUpdateArtwork | null>(null);
export default function UpdateArtworkProvider({ children }: { children: React.ReactNode }) {
	const [error, setError] = useState<string | null>(null);
	const [artworkId, setArtworkId] = useState<number | null>(null);
	const [isReadyToUpdate, setReady] = useState<boolean | null>(null);

	const [artwork, setArtwork] = useState<IArtwork | null>(null);
	const [artists, setArtists] = useState<IPartialArtist[] | null>(null);
	const [museums, setMuseums] = useState<IPartialMuseum[] | null>(null);

	useEffect(() => {
		async function Fetch() {
			if (artworkId) {
				setReady(false);
				try {
					const artwork_data = await ArtworkRequest.GetArtworkById(artworkId);
					if (artwork_data) setArtwork(artwork_data);

					if (artists == null) {
						const artists_data = await ArtistRequest.Partial();
						if (artists_data) setArtists(artists_data);
					}

					if (museums == null) {
						const museums_data = await MuseumRequest.Partial();
						if (museums_data) setMuseums(museums_data);
					}
				} catch (error) {
					if (error instanceof AxiosError) setError(error.message);
					else setError("Unexpected Error.");
				}
			} else if (artworkId == null) {
				setReady(null);
				setError(null);
				setArtwork(null);
			}
		}
		Fetch();
	}, [artworkId]);

	useEffect(() => {
		if (artists && museums && artwork) setReady(true);
	}, [artists, artwork, museums]);

	return (
		<UpdateArtworkContext.Provider value={{ artists, artwork, isReadyToUpdate, museums, error, artworkId, setArtworkId, setArtwork, setError }}>
			{children}
		</UpdateArtworkContext.Provider>
	);
}

export function useUpdateArtwork() {
	const context = useContext(UpdateArtworkContext);
	if (context == null) throw Error("Update context nonono");
	return context;
}
