"use client";

import { usePokemon } from "@/hooks/usePokemon";
import { Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import PokemonRow from "./PokemonRow";
import { usePokemonArray } from "@/hooks/usePokemonArray";
import PokedexTable from "./PokedexTable";
import { Pokemon } from "@/types/types";
import FilterablePokedexTable from "./FilterablePokedexTable";

const PokemonSearchForm = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const [pokemonArray, setPokemonArray] = useState<Pokemon[]>([]);

  const { pokemons: pokemonArrayData } = usePokemonArray(names);

  const { pokemons, error, isLoading, updatePokemonName } =
    usePokemon(searchPokemon);

  useEffect(() => {
    if (pokemonArrayData) {
      setPokemonArray(pokemonArrayData);
    }
  }, [names, searchPokemon, pokemonArray, pokemons]);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (searchPokemon.includes(",")) {
      const nameArray = searchPokemon.split(",").map((name) => name.trim());
      setNames(nameArray);
    } else {
      updatePokemonName(searchPokemon);
    }
  }

  return (
    <>
    
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-4"
        >
          <TextField
            label="Enter Pokemon name"
            value={searchPokemon}
            onChange={(e) => setSearchPokemon(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Get Pokemon
          </Button>
        </form>
        <div className="mt-2">
        <FilterablePokedexTable />
        </div>
        {searchPokemon.includes(",") ? <PokedexTable pokemons={pokemonArray} /> : <PokemonRow pokemon={pokemons} />}
      </div>
    </>
  );
};

export default PokemonSearchForm;
