"use client";

import { usePokemon } from "@/hooks/usePokemon";
import { Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import PokemonRow from "./PokemonRow";
import PokedexTable from "./PokedexTable";


const PokemonForm = () => {
  const [multi_pokemon, setMulti_Pokemon] = useState([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

  }

  return (
    <>
      <div>

        
      </div>
    </>
  );
};

export default PokemonForm;
