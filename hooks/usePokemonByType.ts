import { trpc } from '@/server/client';
import { useState } from 'react';

export const usePokemonByType = (selectedTypes:string) => {
  const [pokemonName, setPokemonName] = useState("");

  const { data, error, isLoading } = trpc.users.getPokemonsByType.useQuery(selectedTypes, {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  console.log(data)

  return {
    data,
    error,
    isLoading,
  };
};