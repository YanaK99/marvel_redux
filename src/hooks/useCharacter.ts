import { useEffect, useState } from 'react';
import { ICharacter, ICharactersApiData } from '@/types/models';
import axios from '@/utils/axios';

const UseCharacter = (id: string) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function fetchCharacters(id: string) {
    try {
      setError('');
      setLoading(true);
      const { data } = await axios.get<ICharactersApiData>(`/characters/${id}`);
      setCharacter(data.results[0]);
    } catch (e) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters(id);
  }, [id]);

  return { character, error, loading };
};

export default UseCharacter;
