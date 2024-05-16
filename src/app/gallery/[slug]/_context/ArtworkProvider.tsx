import { IArtwork } from "@/interfaces/IArtwork";
import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

interface IArtworkContext {
	isFetching: boolean | null;
	setFetching: React.Dispatch<SetStateAction<boolean | null>>;
	isError: boolean | null;
	setError: React.Dispatch<SetStateAction<boolean | null>>;
	artwork: IArtwork | null;
	setArtwork: React.Dispatch<SetStateAction<IArtwork | null>>;
}

const ArtworkContext = createContext<IArtworkContext | null>(null);

export default function ArtworkProvider({ children }: { children: ReactNode }) {
	const [artwork, setArtwork] = useState<IArtwork | null>(null);
	const [isFetching, setFetching] = useState<boolean | null>(null);
	const [isError, setError] = useState<boolean | null>(null);
	return (
		<ArtworkContext.Provider value={{ artwork, setArtwork, isError, isFetching, setError, setFetching }}>
			{children}
		</ArtworkContext.Provider>
	);
}

export function useArtworkContext() {
	const context = useContext(ArtworkContext);
	if (!context) throw new Error("Artwork context be nulling");
	return context;
}
