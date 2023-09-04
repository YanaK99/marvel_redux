// eslint-disable-next-line import/named
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import { AppState } from "@/store";
import { authActions } from "@/store/auth/actions";
import { AUTH_TOKEN } from "@/constants";

export const authLogoutThunkAction =
  (): ThunkAction<void, AppState, void, AnyAction> =>
  async (dispatch: ThunkDispatch<AppState, void, AnyAction>): Promise<void> => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(authActions.logout());
  };
