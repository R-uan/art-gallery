import { configureStore } from "@reduxjs/toolkit";
import ArtworkListingSlice from "./ArtworkListingSlice";
import ArtworkFocusSlice from "./ArtworkFocusSlice";

export const ArtworkStore = configureStore({
	reducer: {
		artworkFocus: ArtworkFocusSlice,
		artworkListing: ArtworkListingSlice,
	},
});

export type RootState = ReturnType<typeof ArtworkStore.getState>;
export type AppDispatch = typeof ArtworkStore.dispatch;
