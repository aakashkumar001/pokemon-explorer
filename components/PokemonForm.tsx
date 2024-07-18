"use client";

import { usePokemon } from "@/hooks/usePokemon";
import { Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import PokemonRow from "./PokemonRow";

const PokemonForm = () => {
  const [single_pokemon, setSingle_Pokemon] = useState("");
  const { pokemon, error, isLoading, pokemonName, updatePokemonName } =
    usePokemon("");

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    updatePokemonName(single_pokemon);
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter Pokemon name"
            value={single_pokemon}
            onChange={(e) => setSingle_Pokemon(e.target.value)}
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Get Pokemon
          </Button>
        </form>
        <PokemonRow pokemon={pokemon} />
      </div>
    </>
  );
};

export default PokemonForm;
