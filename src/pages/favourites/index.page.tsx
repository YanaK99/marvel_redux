import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CharactersTable } from "@/components";

import Stack from "@mui/material/Stack";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

import { favouritesSelector } from "@/store/favourites/favoutite_selectors";
import { favouriteActions } from "@/store/favourites/actions";
import { getFavouritesThunkAction } from "@/store/favourites/thunk/getFavourites_thunk";
import { AppDispatch } from "@/store";

const Favourite = () => {
  const favouriteCharacters = useSelector(favouritesSelector);
  console.log(favouriteCharacters);

  const dispatch = useDispatch<AppDispatch>();

  const orderByDescending = () => {
    dispatch(favouriteActions.order("desc"));
  };

  const orderByAscending = () => {
    dispatch(favouriteActions.order("asc"));
  };

  useEffect(() => {
    dispatch(getFavouritesThunkAction());
  }, [dispatch]);

  return (
    <Stack marginTop={"50px"}>
      <Stack
        flexDirection={"row"}
        marginBottom={"20px"}
        justifyContent={"flex-end"}
      >
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
      <CharactersTable
        characters={favouriteCharacters}
        favouritesCharacters={favouriteCharacters}
      />
    </Stack>
  );
};

export default Favourite;
