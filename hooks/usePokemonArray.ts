import { trpc } from "@/server/client";

export const usePokemonArray = (pokemonNamesArray: string[]) => {

  //fetching Pokemon Array
  const {
    data: pokemons,
    error,
    isLoading,
  } = trpc.pokemon.getPokemonsArray.useQuery(pokemonNamesArray, {
    enabled: pokemonNamesArray?.length > 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    pokemons,
    error,
    isLoading,
  };
};
