import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import Image from "next/image";
import NextLink from "next/link";

import { ICardCharacter } from "@/types/models";

import { isAuthorizedSelector } from "@/store/auth/auth_selectors";

import { addFavouritesThunkAction } from "@/store/favourites/thunk/addFavourites_thunk";
import { removeFavouritesThunkAction } from "@/store/favourites/thunk/removeFavourites_thunk";
import { AppDispatch } from "@/store";

interface CharacterProps {
  character: ICardCharacter;
  isCharacterFilled: boolean;
}

export function Character({ character, isCharacterFilled }: CharacterProps) {
  const [isFilled, setIsFilled] = useState(isCharacterFilled);
  const isAuthorized = useSelector(isAuthorizedSelector);
  const dispatch = useDispatch<AppDispatch>();
  const addFavouriteCharacter = () => {
    setIsFilled(!isFilled);
    dispatch(addFavouritesThunkAction(character));
  };

  const removeFavouriteCharacter = () => {
    setIsFilled(!isFilled);
    dispatch(removeFavouritesThunkAction(character));
  };

  return (
    <Stack direction="column" alignItems="center">
      {character.thumbnail && (
        <NextLink href={`/characters/${character.id}`}>
          <Image
            src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
            alt={character.name || "cover"}
            width="300"
            height="300"
          />
        </NextLink>
      )}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography
          variant="h5"
          align="center"
          color="#8a1212"
          fontWeight="bold"
          fontFamily="Modern No. 20"
        >
          {character.name}
        </Typography>
        {isAuthorized &&
          (isFilled ? (
            <FavoriteRoundedIcon
              onClick={removeFavouriteCharacter}
              color="primary"
            />
          ) : (
            <FavoriteBorderRoundedIcon
              onClick={addFavouriteCharacter}
              color="primary"
            />
          ))}
      </Stack>
    </Stack>
  );
}

export default Character;
