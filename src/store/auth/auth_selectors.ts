import { AppState } from "@/store";

export const isAuthorizedSelector = (state: AppState) =>
  state.auth.isAuthorized;
