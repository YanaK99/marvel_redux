import { AppState } from "@/store";

export const fetchHeroSelector = (state: AppState) => state.hero.character;

export const heroErrorSelector = (state: AppState) => state.hero.error;

export const heroLoadingSelector = (state: AppState) => state.hero.loading;
