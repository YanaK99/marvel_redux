import { AppState } from "@/store";

export const fetchHeroesSelector = (state: AppState) => state.heroes.characters;

export const heroesErrorSelector = (state: AppState) => state.heroes.error;

export const heroesLoadingSelector = (state: AppState) => state.heroes.loading;

export const heroesPageSelector = (state: AppState) => state.heroes.page;
export const heroesPagesCountSelector = (state: AppState) =>
  state.heroes.pagesCount;

export const heroesFilterByNameSelector = (state: AppState) =>
  state.heroes.filterByName;

export const heroesNamesSelector = (state: AppState) =>
  state.heroes.charactersNames;
