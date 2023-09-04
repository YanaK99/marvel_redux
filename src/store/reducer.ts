import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/auth_reducer";
import favouritesReducer from "./favourites/favourites_reducer";
import heroesReducer from "./heroes/heroes_reducer";
import heroReducer from "./hero/hero_reducer";

const reducer = combineReducers({
  auth: authReducer,
  favourites: favouritesReducer,
  heroes: heroesReducer,
  hero: heroReducer,
});

export default reducer;
