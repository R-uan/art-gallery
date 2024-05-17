import { IPartialArtwork } from "@/interfaces/IArtwork";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISlice {
	artworks: IPartialArtwork[] | null;
	next_page: string | null;
	previous_page: string | null;
	total_pages: number | null;
}

const initial_state: ISlice = { artworks: null, next_page: null, previous_page: null, total_pages: null };
const ExibitionSlice = createSlice({
	name: "Exibition Slice",
	initialState: initial_state,
	reducers: {
		setArtworks: (state, action: PayloadAction<IPartialArtwork[] | null>) => {
			state.artworks = action.payload;
		},

		setNextPage: (state, action: PayloadAction<string | null>) => {
			state.next_page = action.payload;
		},

		setPreviousPage: (state, action: PayloadAction<string | null>) => {
			state.previous_page = action.payload;
		},

		setTotalPages: (state, action: PayloadAction<number | null>) => {
			state.total_pages = action.payload;
		},
	},
});

export const { setArtworks, setNextPage, setPreviousPage, setTotalPages } = ExibitionSlice.actions;
export const ExibitionStore = configureStore({ reducer: { artworks: ExibitionSlice.reducer } });
export type RootState = ReturnType<typeof ExibitionStore.getState>;
