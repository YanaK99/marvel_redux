import React from 'react';
import { useCharacters } from '@/hooks/characters';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loader from '@/components/Loader/Loader';
import Characters from '@/components/Characters/Characters';

const IndexPage = () => {
  const { characters, error, loading } = useCharacters();
  console.log(characters);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {characters.map((character) => (
        <Characters key={character.id} character={character} />
      ))}
    </div>
  );
};

export default IndexPage;
