import { IArtwork } from "@/interfaces/IArtwork";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArtworkFocus {
	artwork: IArtwork | null;
	fetching: boolean;
	error: boolean;
}

const InitialState: IArtworkFocus = { artwork: null, error: false, fetching: false };
const ArtworkFocusSlice = createSlice({
	name: "ArtworkFocus",
	initialState: InitialState,
	reducers: {
		setFocusArtwork: (state, payload: PayloadAction<IArtwork | null>) => {
			state.artwork = payload.payload;
		},
		setFetching: (state, payload: PayloadAction<boolean>) => {
			state.fetching = payload.payload;
		},
		setError: (state, payload: PayloadAction<boolean>) => {
			state.error = payload.payload;
		},
	},
});

export default ArtworkFocusSlice.reducer;
export const { setFocusArtwork, setError, setFetching } = ArtworkFocusSlice.actions;
