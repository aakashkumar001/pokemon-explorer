import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import React from "react";
import { PokemonRowProps } from "@/types/types";

const PokemonRow = ({ pokemon }: any) => {
  return (
    <>
      {pokemon && (
        <div className=" w-full flex-col justify-center items-center p-16  gap-10 mt-4">
          <h1 className="text-gray-800">#{pokemon?.id}</h1>
          <h1 className="text-2xl">{pokemon?.name}</h1>
          <div>
            {pokemon?.type?.map((p: any) => (
              <Chip label={p} size="small" color="success" />
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
