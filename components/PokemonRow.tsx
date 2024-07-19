import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { PokemonRowProps } from "@/types/types";


const PokemonRow = ({ pokemon }:any) => {
  return (
    <>
      {pokemon && (
        <div className="">
          <div className="">
            <p>{pokemon?.name}</p>
            <p>{pokemon?.id}</p>
            {pokemon?.types?.map((p:any) => (
              <p>{p}</p>
            ))}
            <img
              src={pokemon?.sprite}
              alt={pokemon?.name}
              height={280}
              width={240}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonRow;
