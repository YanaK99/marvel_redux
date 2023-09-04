// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILocalStorageCharacter } from "@/types/models";

export type FavouritesState = {
  favouriteCharacters: ILocalStorageCharacter[];
  order: "asc" | "desc" | null;
};

const initialState: FavouritesState = {
  favouriteCharacters: [],
  order: null,
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    order: (state, action: PayloadAction<"asc" | "desc">) => {
      state.order = action.payload;
    },
    setFavourites: (state, action: PayloadAction<ILocalStorageCharacter[]>) => {
      state.favouriteCharacters = action.payload;
    },
  },
});

export default favouritesSlice.reducer;
