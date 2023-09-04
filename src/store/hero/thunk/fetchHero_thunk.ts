// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { heroActions } from "@/store/hero/action";
import axios from "@/utils/axios";
import { ICharactersApiData } from "@/types/models";

export const fetchHeroThunkAction =
  (id: string): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    dispatch(heroActions.setError(""));
    dispatch(heroActions.setLoading(true));

    try {
      const { data } = await axios.get<ICharactersApiData>(`/characters/${id}`);
      dispatch(heroActions.setCharacter(data.results[0]));
    } catch (e) {
      dispatch(heroActions.setError((e as Error).message));
    } finally {
      dispatch(heroActions.setLoading(false));
    }
  };
