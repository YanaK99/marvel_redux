// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { heroesActions } from "@/store/heroes/action";
import { fetchHeroesThunkAction } from "@/store/heroes/thunk/fetchHeroes_thunk";

export const orderByNameThunkAction =
  (
    orderBy: "-name" | "name" | "",
  ): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    dispatch(heroesActions.setOrderBy(orderBy));
    dispatch(fetchHeroesThunkAction());
  };
