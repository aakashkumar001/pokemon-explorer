import { trpc } from "@/server/client";
import { useState } from "react";

export const usePokemonByType = (selectedTypes: string) => {
  const [pokemonName, setPokemonName] = useState("");

  const { data, error, isLoading } = trpc.pokemon.getPokemonsByType.useQuery(
    selectedTypes,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
