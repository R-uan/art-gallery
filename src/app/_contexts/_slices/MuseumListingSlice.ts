import IPaginatedResponse from "@/interfaces/IPaginatedResponse";
import { IPartialMuseum } from "@/interfaces/Museum/IMuseum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMuseumListing {
	data: IPaginatedResponse<IPartialMuseum> | null;
	fetching: boolean;
	error: boolean;
}

const InitialState: IMuseumListing = { data: null, fetching: false, error: false };

const MuseumListingSlice = createSlice({
	name: "MuseumListing",
	initialState: InitialState,
	reducers: {
		setMuseumListingData: (state, payload: PayloadAction<IPaginatedResponse<IPartialMuseum> | null>) => {
			state.data = payload.payload;
		},
		setMuseumListingFetch: (state, payload: PayloadAction<boolean>) => {
			state.fetching = payload.payload;
		},
		setMuseumListingError: (state, payload: PayloadAction<boolean>) => {
			state.error = payload.payload;
		},
	},
});
export const { setMuseumListingData, setMuseumListingFetch, setMuseumListingError } = MuseumListingSlice.actions;
export default MuseumListingSlice.reducer;
