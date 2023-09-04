// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { authActions } from "@/store/auth/actions";
import { AUTH_TOKEN } from "@/constants";

export const authLoginThunkAction =
  (): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    localStorage.setItem(AUTH_TOKEN, "true");
    dispatch(authActions.login());
  };
