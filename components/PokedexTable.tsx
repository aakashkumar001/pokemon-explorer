import { usePokemonArray } from "@/hooks/usePokemonArray";
import { Chip, Table } from "@mui/material";
import { Pokemon } from "@/types/types";
import { PokedexTableProps } from "@/types/types";


const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
        <div className="flex-col justify-center p-16 items-center lg:flex xl:flex-row gap-10 mt-4">
        {pokemons?.map((pokemon) => (
          <div className="p-10 flex-col items-center justify-center lg:flex-row xl:flex-row">
            <span className="ml-2 text-gray-600">#{pokemon.id}</span>
            <h1 className="ml-2 text-2xl text-gray-700">{pokemon.name}</h1>
            <div className="w-64 h-56 flex justify-center items-center">
            <img className="object-cover" src={pokemon.sprite} alt="" />
            </div>
            {pokemon.types.map((type) => (
              <Chip label={type} size="small" color="success" className="m-2"/>
            ))}
          </div>
        ))}
        </div>
  );
};

export default PokedexTable;
