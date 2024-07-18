import { usePokemonArray } from "@/hooks/usePokemonArray";
import { Table } from "@mui/material";
import PokemonRow from "./PokemonRow";


const PokedexTable = ({pokemonNames}:{pokemonNames:string[]}) => {
  console.log(pokemonNames)

  const { data: pokemonArray, error, isLoading } = usePokemonArray(pokemonNames);
  console.log(pokemonArray)
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
        {pokemonArray?.map((pokemon) => (
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
  )
}

export default PokedexTable