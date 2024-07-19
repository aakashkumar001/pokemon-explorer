import { usePokemonArray } from "@/hooks/usePokemonArray";
import { Table } from "@mui/material";
import { Pokemon } from "@/types/types";
import { PokedexTableProps } from "@/types/types";


const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
        <div className="flex-col justify-center p-16 items-center lg:flex xl:flex-row gap-10 mt-4">
        {pokemons?.map((pokemon) => (
          <div className="flex-col items-center justify-center lg:flex-row xl:flex-row  bg-slate-400">
            <span className="ml-2">#{pokemon.id}</span>
            <h1 className="ml-2">{pokemon.name}</h1>
            <div className="w-64 h-56 flex justify-center items-center">
            <img className="object-cover" src={pokemon.sprite} alt="" />
            </div>
            {pokemon.types.map((type) => (
              <p className="p-4">{type}</p>
            ))}
          </div>
        ))}
        </div>
  );
};

export default PokedexTable;
