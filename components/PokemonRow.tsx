import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

interface PokemonRowProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
}

const PokemonRow: FC<PokemonRowProps> = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <>
      <Card>
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
