import { ICharacter } from '@/types/models';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Image from 'next/image';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';

interface CharacterProps {
  character: ICharacter;
}

export function Characters({ character }: CharacterProps) {
  const [isFilled, setIsFilled] = useState(false);

  const handleIconClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <Box>
      {character.thumbnail && (
        <Image
          src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
          alt={character.name || 'cover'}
          width="300"
          height="300"
        />
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 65px 0 0',
          alignItems: 'center',
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
        {isFilled ? (
          <FavoriteRoundedIcon
            onClick={handleIconClick}
            sx={{
              color: '#8a1212',
            }}
          />
        ) : (
          <FavoriteBorderRoundedIcon
            onClick={handleIconClick}
            sx={{
              color: '#8a1212',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default Characters;
