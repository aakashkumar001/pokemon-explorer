import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import React from "react";
import { PokemonRowProps } from "@/types/types";

const PokemonRow = ({ pokemon }: any) => {

  return (
    <>
      {pokemon ? (
        <div className="w-full flex-col justify-center items-center p-16 gap-10 mt-4">
          <span className="text-gray-800">{pokemon?.id}</span>
          <h1 className="text-2xl">{pokemon?.name}</h1>
          <div>
            {pokemon?.type?.map((p:string) => (
              <Chip label={p} size="small" color="success" className="mx-1"/>
            ))}
            <div className="w-64 h-56 flex justify-center items-center">
            <img
              src={pokemon?.sprite}
              alt={pokemon?.name}
            />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PokemonRow;
