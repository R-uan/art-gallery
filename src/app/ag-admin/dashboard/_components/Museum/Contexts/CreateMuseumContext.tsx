import { createContext, SetStateAction, useContext, useState } from "react";

interface ICreateMuseumContext {
	isOpen: boolean;
	error: string | null;
	setOpen: React.Dispatch<SetStateAction<boolean>>;
	setError: React.Dispatch<SetStateAction<string | null>>;
}

export const CreateMuseumContext = createContext<ICreateMuseumContext | null>(null);

export default function CreateMuseumProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	return <CreateMuseumContext.Provider value={{ error, setError, isOpen, setOpen }}>{children}</CreateMuseumContext.Provider>;
}

export function useCreateMuseum() {
	const context = useContext(CreateMuseumContext);
	if (context == null) throw Error("CreateMuseumContext is null. Verify if you're consuming the context correctly.");
	return context;
}
