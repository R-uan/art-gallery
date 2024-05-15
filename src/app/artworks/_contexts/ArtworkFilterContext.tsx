import { IPartialArtwork } from "@/interfaces/IArtwork";
import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

interface IArtworkFilter {
	artworks: IPartialArtwork[] | null;
	setArtworks: React.Dispatch<SetStateAction<IPartialArtwork[] | null>>;
}

const ArtworkFilterContext = createContext<IArtworkFilter | null>(null);
export default function ArtworkFilterProvider({ children }: { children: ReactNode }) {
	const [artworks, setArtworks] = useState<IPartialArtwork[] | null>(null);
	useEffect(() => {
		// TODO: FETCH LOGIC
	}, []);
	return <ArtworkFilterContext.Provider value={{ artworks, setArtworks }}>{children}</ArtworkFilterContext.Provider>;
}
