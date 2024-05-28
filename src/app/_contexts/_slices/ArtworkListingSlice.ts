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
		setArtworkListingData: (state, payload: PayloadAction<IPaginatedResponse<IPartialArtwork> | null>) => {
			state.data = payload.payload;
		},
		setArtworkListingFetch: (state, payload: PayloadAction<boolean>) => {
			state.fetching = payload.payload;
		},
		setArtworkListingError: (state, payload: PayloadAction<boolean>) => {
			state.error = payload.payload;
		},
	},
});
export const { setArtworkListingData, setArtworkListingFetch, setArtworkListingError } = ArtworkListingSlice.actions;
export default ArtworkListingSlice.reducer;
