import React, { useEffect, useState } from 'react';
import { useCharacters } from '@/hooks/useCharacters';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loader from '@/components/Loader/Loader';
import Character from '@/components/Character/Character';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Autocomplete, TextField } from '@mui/material';
import { getFavouritesFromLocalStorage } from '@/utils/storage';
import { ILocalStorageCharacter } from '@/types/models';
import Pagination from '@/components/Pagination/Pagination';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
const CharactersPage = () => {
  const {
    characters,
    error,
    loading,
    changePage,
    page,
    pagesCount,
    orderByDescending,
    orderByAscending,
    filterCharacters,
    filterByName,
  } = useCharacters();

  const nameCharacters = characters.map((character) => character.name);
  const [localStorageCharacters, setLocalStorageCharacters] = useState<
    ILocalStorageCharacter[]
  >([]);
  useEffect(() => {
    setLocalStorageCharacters(getFavouritesFromLocalStorage());
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <Box
      sx={{
        marginTop: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={nameCharacters}
          sx={{
            width: 400,
            marginBottom: '50px',
          }}
          value={filterByName}
          onChange={(_, value) => filterCharacters(value ?? '')}
          renderInput={(params) => <TextField {...params} label="Character" />}
        />
        <Box>
          <ArrowDropDownRoundedIcon
            onClick={orderByDescending}
            fontSize="large"
            sx={{ color: 'darkgrey' }}
          />
          <ArrowDropUpRoundedIcon
            onClick={orderByAscending}
            fontSize="large"
            sx={{ color: 'darkgrey' }}
          />
        </Box>
      </Box>
      <Grid container spacing={3}>
        {characters.map((character) => (
          <Grid
            sx={{ display: ' flex', justifyContent: 'center' }}
            item
            key={character.id}
            xs={12}
            sm={6}
            md={4}
          >
            <Character
              character={character}
              isCharacterFilled={localStorageCharacters.some(
                (item) => character.id === item.id
              )}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        changePage={changePage}
        page={page}
        pagesCount={pagesCount}
        sx={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      />
    </Box>
  );
};

export default CharactersPage;
