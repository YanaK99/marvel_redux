import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import allHeroesImage from '@/assets/jpeg/marvel-comics.jpg';

const HomePage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        position: 'relative',
        opacity: 0.6,
        top: '100px',
      }}
    >
      <Image
        src={allHeroesImage.src}
        alt="all heroes"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default HomePage;
