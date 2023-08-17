import React from 'react';
import { useCharacters } from '@/hooks/characters';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loader from '@/components/Loader/Loader';
import Characters from '@/components/Characters/Characters';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Autocomplete, TextField } from '@mui/material';

const CharactersPage = () => {
  const { characters, error, loading } = useCharacters();

  const nameCharacters = characters.map((character) => character.name);

  return (
    <Box sx={{ marginTop: '50px' }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={nameCharacters}
        sx={{
          width: 400,
          marginBottom: '50px',
        }}
        renderInput={(params) => <TextField {...params} label="Characters" />}
      />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <Grid container spacing={3}>
        {characters.map((character) => (
          <Grid item key={character.id} xs={12} sm={6} md={4}>
            <Characters character={character} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CharactersPage;
