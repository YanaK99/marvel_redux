// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { heroesActions } from "@/store/heroes/action";
import axios from "@/utils/axios";
import { ICharactersApiData } from "@/types/models";

export const heroesNamesThunkAction =
  (name: string): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    try {
      const { data } = await axios.get<ICharactersApiData>("/characters", {
        params: {
          nameStartsWith: name,
        },
      });
      dispatch(
        heroesActions.setCharactersNames(
          data.results.map((character) => character.name ?? ""),
        ),
      );
    } catch (e) {
      dispatch(heroesActions.setCharactersNameError((e as Error).message));
    }
  };
