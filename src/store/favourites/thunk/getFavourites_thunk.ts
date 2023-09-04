// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { favouriteActions } from "@/store/favourites/actions";
import { getFavouritesFromLocalStorage } from "@/utils/storage";

export const getFavouritesThunkAction =
  (): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    const favourites = getFavouritesFromLocalStorage();
    dispatch(favouriteActions.setFavourites(favourites));
  };
