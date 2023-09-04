// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { heroesActions } from "@/store/heroes/action";
import { LIMIT } from "@/constants";
import axios from "@/utils/axios";
import { ICharactersApiData } from "@/types/models";

export const fetchHeroesThunkAction =
  (): ThunkAction<void, AppState, void, AnyAction> =>
  async (
    dispatch: ThunkDispatch<AppState, void, AnyAction>,
    getState,
  ): Promise<void> => {
    const { page, orderBy, filterByName, characters } = getState().heroes;
    dispatch(heroesActions.setError(""));

    if (!characters.length) dispatch(heroesActions.setLoading(true));

    try {
      const { data } = await axios.get<ICharactersApiData>("/characters", {
        params: {
          limit: LIMIT,
          offset: page * LIMIT - LIMIT,
          orderBy,
          name: filterByName || undefined,
        },
      });
      dispatch(heroesActions.setCharacters(data.results));
      dispatch(heroesActions.setPagesCount(Math.ceil(data.total / LIMIT)));
    } catch (e) {
      dispatch(heroesActions.setError((e as Error).message));
    } finally {
      dispatch(heroesActions.setLoading(false));
    }
  };
