import { createContext, SetStateAction, useContext, useState } from "react";

interface ICreateArtistContext {
	isOpen: boolean;
	error: string | null;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	setError: React.Dispatch<SetStateAction<string | null>>;
}

export const CreateArtistContext = createContext<ICreateArtistContext | null>(null);

export default function CreateArtistProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	return <CreateArtistContext.Provider value={{ error, setError, isOpen, setOpen }}>{children}</CreateArtistContext.Provider>;
}

export function useCreateArtist() {
	const context = useContext(CreateArtistContext);
	if (context == null) throw Error("CreateArtistContext is null. Verify if you're consuming the context correctly.");
	return context;
}
