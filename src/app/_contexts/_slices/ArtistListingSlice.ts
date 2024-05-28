import { IPartialArtist } from "@/interfaces/Artist/IArtist";
import { IPartialArtwork } from "@/interfaces/IArtwork";
import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArtistListing {
	data: IPaginatedResponse<IPartialArtist> | null;
	fetching: boolean;
	error: boolean;
}

const InitialState: IArtistListing = { data: null, fetching: false, error: false };

const ArtistListingSlice = createSlice({
	name: "ArtistArtwork",
	initialState: InitialState,
	reducers: {
		setArtistListingData: (state, payload: PayloadAction<IPaginatedResponse<IPartialArtist> | null>) => {
			state.data = payload.payload;
		},
		setArtistListingFetch: (state, payload: PayloadAction<boolean>) => {
			state.fetching = payload.payload;
		},
		setArtistListingError: (state, payload: PayloadAction<boolean>) => {
			state.error = payload.payload;
		},
	},
});

export const { setArtistListingData, setArtistListingError, setArtistListingFetch } = ArtistListingSlice.actions;
export default ArtistListingSlice.reducer;
