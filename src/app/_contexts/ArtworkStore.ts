import { configureStore } from "@reduxjs/toolkit";
import ArtworkFocusSlice from "./ArtworkFocusSlice";
import ArtworkListingSlice from "./ArtworkListingSlice";

export const ArtworkStore = configureStore({
	reducer: {
		artworkFocus: ArtworkFocusSlice,
		artworkListing: ArtworkListingSlice,
	},
});

export type RootState = ReturnType<typeof ArtworkStore.getState>;
export type AppDispatch = typeof ArtworkStore.dispatch;
