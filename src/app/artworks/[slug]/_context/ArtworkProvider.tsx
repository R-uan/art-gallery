import { IArtist } from "@/interfaces/IArtist";
import { IArtwork } from "@/interfaces/IArtwork";
import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

interface IArtworkContext {
	artwork: IArtwork | null;
	setArtwork: React.Dispatch<SetStateAction<IArtwork | null>>;
}

const ArtworkContext = createContext<IArtworkContext | null>(null);

export default function ArtworkProvider({ children }: { children: ReactNode }) {
	const [artwork, setArtwork] = useState<IArtwork | null>(null);
	return <ArtworkContext.Provider value={{ artwork, setArtwork }}>{children}</ArtworkContext.Provider>;
}

export function useArtworkContext() {
	const context = useContext(ArtworkContext);
	if (!context) throw new Error("Artwork context be nulling");
	return context;
}
