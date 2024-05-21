import { IPartialArtwork } from "@/interfaces/IArtwork";
import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IArtworkFilter {
	data: IPaginatedResponse<IPartialArtwork> | null;
	setDataState: React.Dispatch<SetStateAction<IPaginatedResponse<IPartialArtwork> | null>>;
}

const ArtworkFilterContext = createContext<IArtworkFilter | null>(null);
export default function ArtworkFilterProvider({ children }: { children: ReactNode }) {
	const [data, setDataState] = useState<IPaginatedResponse<IPartialArtwork> | null>(null);
	return <ArtworkFilterContext.Provider value={{ data, setDataState }}>{children}</ArtworkFilterContext.Provider>;
}

export function useArtworkQuery() {
	const query_context = useContext(ArtworkFilterContext);
	if (query_context == null) throw new Error("Artwork query is null.");
	return query_context;
}
