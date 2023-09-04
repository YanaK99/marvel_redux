import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ErrorMessage, Loader, CharactersTable } from "@/components";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import Stack from "@mui/material/Stack";

import {
  fetchHeroesSelector,
  heroesErrorSelector,
  heroesFilterByNameSelector,
  heroesLoadingSelector,
  heroesNamesSelector,
  heroesPagesCountSelector,
  heroesPageSelector,
} from "@/store/heroes/heroes_selectors";
import { setPageThunkAction } from "@/store/heroes/thunk/setPage_thunk";
import { AppDispatch } from "@/store";
import { orderByNameThunkAction } from "@/store/heroes/thunk/orderByName_thunk";
import { favouritesSelector } from "@/store/favourites/favoutite_selectors";
import { getFavouritesThunkAction } from "@/store/favourites/thunk/getFavourites_thunk";
import { fetchHeroesThunkAction } from "@/store/heroes/thunk/fetchHeroes_thunk";
import { heroesNamesThunkAction } from "@/store/heroes/thunk/heroesNames_thunk";
import { filterHeroesThunkAction } from "@/store/heroes/thunk/filterHeroes_thunk";

const CharactersPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const characters = useSelector(fetchHeroesSelector);
  const loading = useSelector(heroesLoadingSelector);
  const error = useSelector(heroesErrorSelector);
  const filterByName = useSelector(heroesFilterByNameSelector);
  const page = useSelector(heroesPageSelector);
  const pagesCount = useSelector(heroesPagesCountSelector);
  const nameCharacters = useSelector(heroesNamesSelector);

  const submitFilterByName = (value: string | null) => {
    dispatch(filterHeroesThunkAction(value || ""));
  };

  const changePage = (page: number) => {
    dispatch(setPageThunkAction(page));
  };

  const filterCharacters = (value: string) => {
    dispatch(heroesNamesThunkAction(value));
  };

  const orderByDescending = () => {
    dispatch(orderByNameThunkAction("-name"));
  };

  const orderByAscending = () => {
    dispatch(orderByNameThunkAction("name"));
  };

  const favouriteCharacters = useSelector(favouritesSelector);

  useEffect(() => {
    dispatch(fetchHeroesThunkAction());
    dispatch(getFavouritesThunkAction());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <Stack marginTop="50px">
      <Stack justifyContent="space-between" flexDirection="row">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={nameCharacters || []}
          sx={{
            width: 400,
            marginBottom: "50px",
          }}
          value={filterByName}
          onChange={(_, value) => submitFilterByName(value)}
          onInput={(event) => {
            filterCharacters(event.target.value);
          }}
          renderInput={(params) => <TextField {...params} label="Character" />}
        />
        <Stack flexDirection={"row"}>
          <ArrowDropDownRoundedIcon
            onClick={orderByDescending}
            fontSize="large"
            sx={{ color: "info" }}
          />
          <ArrowDropUpRoundedIcon
            onClick={orderByAscending}
            fontSize="large"
            sx={{ color: "info" }}
          />
        </Stack>
      </Stack>
      <CharactersTable
        characters={characters}
        favouritesCharacters={favouriteCharacters}
        pageConfig={{ page, pagesCount, changePage }}
      />
    </Stack>
  );
};

export default CharactersPage;
