import { configureStore } from "@reduxjs/toolkit";
import ArtworkFocusSlice from "./_slices/ArtworkFocusSlice";
import ArtworkListingSlice from "./_slices/ArtworkListingSlice";
import ArtistListingSlice from "./_slices/ArtistListingSlice";
import MuseumListingSlice from "./_slices/MuseumListingSlice";

export const GalleryStore = configureStore({
	reducer: {
		artworkFocus: ArtworkFocusSlice,
		artworkListing: ArtworkListingSlice,
		artistListing: ArtistListingSlice,
		museumListing: MuseumListingSlice,
	},
});

export type RootState = ReturnType<typeof GalleryStore.getState>;
export type AppDispatch = typeof GalleryStore.dispatch;
