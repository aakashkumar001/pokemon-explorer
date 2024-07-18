import { trpc } from "@/server/client";

export const usePokemonArray = (pokemonNames: string[]) => {
  const { data, error, isLoading } = trpc.users.getPokemonsArray.useQuery(pokemonNames, {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    data,
    error,
    isLoading,
  };
};
