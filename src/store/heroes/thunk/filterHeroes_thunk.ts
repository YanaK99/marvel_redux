// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { heroesActions } from "@/store/heroes/action";
import { fetchHeroesThunkAction } from "@/store/heroes/thunk/fetchHeroes_thunk";

export const filterHeroesThunkAction =
  (filter: string): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    dispatch(heroesActions.setFilterByName(filter));
    dispatch(heroesActions.setPage(1));
    dispatch(fetchHeroesThunkAction());
  };
