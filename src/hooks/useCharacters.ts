import { useCallback, useEffect, useState } from 'react';
import { ICharacter, ICharactersApiData } from '@/types/models';
import axios from '@/utils/axios';

export function useCharacters() {
  const PAGE_TOKEN = 'page token';
  const LIMIT = 12;
  const defaultPage =
    typeof window !== 'undefined'
      ? Number(localStorage.getItem(PAGE_TOKEN) || 1)
      : 1;
  const [characters, setCharacter] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(defaultPage);
  const [filterByName, setFilterByName] = useState<string>('');
  const [pagesCount, setPagesCount] = useState(0);
  const [orderBy, setOrderBy] = useState<'-name' | 'name' | ''>('');
  const fetchCharacters = useCallback(async () => {
    try {
      setError('');
      setLoading(true);
      const { data } = await axios.get<ICharactersApiData>('/characters', {
        params: {
          limit: LIMIT,
          offset: page * LIMIT - LIMIT,
          orderBy,
          name: filterByName || undefined,
        },
      });
      setCharacter(data.results);
      setPagesCount(Math.ceil(data.total / LIMIT));
    } catch (e) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [page, orderBy, filterByName]);

  function changePage(page: number) {
    setPage(page);
    localStorage.setItem(PAGE_TOKEN, String(page));
  }

  function orderByDescending() {
    setOrderBy('-name');
  }

  function orderByAscending() {
    setOrderBy('name');
  }

  function filterCharacters(name: string) {
    setFilterByName(name);
    changePage(1);
  }

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return {
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
  };
}
