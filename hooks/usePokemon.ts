import { trpc } from "@/server/client";
import { useState } from "react";

export const usePokemon = (initialPokemonName: string) => {
  const [pokemonName, setPokemonName] = useState(initialPokemonName);

  //fetching single pokemon
  const {
    data: pokemons,
    error,
    isLoading,
  } = trpc.pokemon.getPokemon.useQuery(pokemonName.toLowerCase(), {
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
