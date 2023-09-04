// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "@/types/models";
import { getDefaultPage } from "@/utils/common";

export type HeroesState = {
  characters: ICharacter[];
  loading: boolean;
  error: string;
  page: number;
  filterByName: string;
  pagesCount: number;
  orderBy: "-name" | "name" | "";
  charactersNames: string[];
  charactersNamesError: string;
};

const initialState: HeroesState = {
  characters: [],
  loading: false,
  error: "",
  page: getDefaultPage(),
  filterByName: "",
  pagesCount: 0,
  orderBy: "",
  charactersNames: [],
  charactersNamesError: "",
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilterByName: (state, action: PayloadAction<string>) => {
      state.filterByName = action.payload;
    },
    setPagesCount: (state, action: PayloadAction<number>) => {
      state.pagesCount = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<"-name" | "name" | "">) => {
      state.orderBy = action.payload;
    },
    setCharactersNames: (state, action: PayloadAction<string[]>) => {
      state.charactersNames = action.payload;
    },
    setCharactersNameError: (state, action: PayloadAction<string>) => {
      state.charactersNamesError = action.payload;
    },
  },
});

export default heroesSlice.reducer;
