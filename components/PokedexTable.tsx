import { usePokemonArray } from "@/hooks/usePokemonArray";
import { Table } from "@mui/material";
import { Pokemon } from "@/types/types";
import { PokedexTableProps } from "@/types/types";


const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Types</th>
          <th>sprite</th>
        </tr>
      </thead>
      <tbody>
        {pokemons?.map((pokemon) => (
          <div>
            <h1>{pokemon.id}</h1>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprite} alt="" />
            {pokemon.types.map((type) => (
              <p>{type}</p>
            ))}
          </div>
        ))}
      </tbody>
    </Table>
  );
};

export default PokedexTable;
