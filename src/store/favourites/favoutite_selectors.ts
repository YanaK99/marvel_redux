import { AppState } from "@/store";

export const favouritesSelector = (state: AppState) =>
  state.favourites.order
    ? [...state.favourites.favouriteCharacters].sort((a, b) =>
        state.favourites.order === "asc" ? a.date - b.date : b.date - a.date,
      )
    : state.favourites.favouriteCharacters;
