// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { favouriteActions } from "@/store/favourites/actions";
import {
  getFavouritesFromLocalStorage,
  removeFavouriteFromLocalStorage,
} from "@/utils/storage";
import { ICharacter } from "@/types/models";

export const removeFavouritesThunkAction =
  (character: ICharacter): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    removeFavouriteFromLocalStorage(character);
    const favourites = getFavouritesFromLocalStorage();
    dispatch(favouriteActions.setFavourites(favourites));
  };
