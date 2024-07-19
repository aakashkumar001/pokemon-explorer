import { trpc } from "@/server/client";
import { useState } from "react";

export const usePokemon = (initialPokemonName: string) => {
  const [pokemonName, setPokemonName] = useState(initialPokemonName);

  const {
    data: pokemons,
    error,
    isLoading,
  } = trpc.pokemon.getPokemon.useQuery(pokemonName, {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  
  const updatePokemonName = (newPokemonName: string) => {
    setPokemonName(newPokemonName);
  };

  return {
    pokemons,
    error,
    isLoading,
    updatePokemonName,
  };
};
