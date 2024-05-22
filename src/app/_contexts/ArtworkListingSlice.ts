import { IPartialArtwork } from "@/interfaces/IArtwork";
import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArtworkListing {
	data: IPaginatedResponse<IPartialArtwork> | null;
	fetching: boolean;
	error: boolean;
}

const InitialState: IArtworkListing = { data: null, fetching: false, error: false };

const ArtworkListingSlice = createSlice({
	name: "ArtworkListing",
	initialState: InitialState,
	reducers: {
		setListingData: (state, payload: PayloadAction<IPaginatedResponse<IPartialArtwork> | null>) => {
			state.data = payload.payload;
		},
		setFetching: (state, payload: PayloadAction<boolean>) => {
			state.fetching = payload.payload;
		},
		setError: (state, payload: PayloadAction<boolean>) => {
			state.error = payload.payload;
		},
	},
});
export const { setListingData, setError, setFetching } = ArtworkListingSlice.actions;
export default ArtworkListingSlice.reducer;
