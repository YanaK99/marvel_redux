import { ICharacter } from '@/types/models';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  addFavouriteToLocalStorage,
  removeFavouriteFromLocalStorage,
} from '@/utils/storage';
import ModalContext from '@/context/ModalContext';
import NextLink from 'next/link';

interface CharacterProps {
  character: ICharacter;
  isCharacterFilled: boolean;
}

export function Character({ character, isCharacterFilled }: CharacterProps) {
  const [isFilled, setIsFilled] = useState(isCharacterFilled);
  const { isAuthorized } = useContext(ModalContext);

  const addFavouriteCharacter = () => {
    setIsFilled(!isFilled);
    addFavouriteToLocalStorage(character);
  };

  const removeFavouriteCharacter = () => {
    setIsFilled(!isFilled);
    removeFavouriteFromLocalStorage(character);
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {character.thumbnail && (
        <NextLink href={`/characters/${character.id}`}>
          <Image
            src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
            alt={character.name || 'cover'}
            width="300"
            height="300"
          />
        </NextLink>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#8a1212',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Modern No. 20',
          }}
        >
          {character.name}
        </Typography>
        {isAuthorized &&
          (isFilled ? (
            <FavoriteRoundedIcon
              onClick={removeFavouriteCharacter}
              sx={{
                color: '#8a1212',
              }}
            />
          ) : (
            <FavoriteBorderRoundedIcon
              onClick={addFavouriteCharacter}
              sx={{
                color: '#8a1212',
              }}
            />
          ))}
      </Box>
    </Box>
  );
}

export default Character;
