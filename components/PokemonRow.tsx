import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { PokemonRowProps } from "@/types/types";


const PokemonRow: FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <>
      <Card className="">
        <CardContent>
          <Typography variant="h5">{pokemon?.name}</Typography>
          <Typography>{pokemon?.id}</Typography>
          {pokemon?.types?.map((p) => (
            <Typography>{p}</Typography>
          ))}
          <CardMedia
            component="img"
            image={pokemon?.sprite}
            alt={pokemon?.name}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default PokemonRow;
