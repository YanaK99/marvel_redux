// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { heroesActions } from "@/store/heroes/action";
import { fetchHeroesThunkAction } from "@/store/heroes/thunk/fetchHeroes_thunk";
import { PAGE_TOKEN } from "@/constants";

export const setPageThunkAction =
  (page: number): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    dispatch(heroesActions.setPage(page));
    dispatch(fetchHeroesThunkAction());
    localStorage.setItem(PAGE_TOKEN, String(page));
  };
