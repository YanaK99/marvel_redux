// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "@/types/models";

export type HeroState = {
  character: ICharacter | "";
  loading: boolean;
  error: string;
};

const initialState: HeroState = {
  character: "",
  loading: false,
  error: "",
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<ICharacter>) => {
      state.character = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default heroSlice.reducer;
