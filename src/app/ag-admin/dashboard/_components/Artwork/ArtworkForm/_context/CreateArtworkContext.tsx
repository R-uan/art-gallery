import { IPartialArtist } from "@/interfaces/IArtist";
import { IArtwork } from "@/interfaces/IArtwork";
import { IPartialMuseum } from "@/interfaces/IMuseum";
import ArtistRequest from "@/scripts/ArtistRequest";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import MuseumRequest from "@/scripts/MuseumRequest";
import { AxiosError } from "axios";
import { createContext, SetStateAction, useContext, useEffect, useState } from "react";

interface ICreateArtwork {
	isReadyToCreate: boolean | null;
	artists: IPartialArtist[] | null;
	museums: IPartialMuseum[] | null;
	error: string | null;
	isOpen: boolean;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	setError: React.Dispatch<SetStateAction<string | null>>;
}

const CreateArtworkContext = createContext<ICreateArtwork | null>(null);
export default function CreateArtworkProvider({ children }: { children: React.ReactNode }) {
	const [error, setError] = useState<string | null>(null);
	const [isReadyToCreate, setReady] = useState<boolean | null>(null);
	const [artists, setArtists] = useState<IPartialArtist[] | null>(null);
	const [museums, setMuseums] = useState<IPartialMuseum[] | null>(null);
	const [isOpen, setOpen] = useState<boolean>(false);

	useEffect(() => {
		async function Fetch() {
			setReady(false);
			try {
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
		}
		Fetch();
	}, [artists, museums]);

	useEffect(() => {
		if (museums && artists) setReady(true);
	}, [museums, artists]);

	return (
		<CreateArtworkContext.Provider value={{ artists, isReadyToCreate, museums, error, setError, isOpen, setOpen }}>
			{children}
		</CreateArtworkContext.Provider>
	);
}

export function useCreateArtwork() {
	const context = useContext(CreateArtworkContext);
	if (context == null) throw Error("Update context nonono");
	return context;
}
