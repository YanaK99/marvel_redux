import { useEffect, useState } from 'react';
import { ICharacter, ICharacterApiData } from '@/types/models';
import axios from '@/utils/axios';

export function useCharacters() {
  const [characters, setCharacter] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function fetchCharacters() {
    try {
      setError('');
      setLoading(true);
      const { data } = await axios.get<ICharacterApiData>('/characters');
      setCharacter(data.results);
    } catch (e) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return { characters, error, loading };
}
