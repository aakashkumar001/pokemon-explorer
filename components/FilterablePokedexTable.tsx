import { useEffect, useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import { usePokemonByType } from "@/hooks/usePokemonByType";
import PokedexTable from "./PokedexTable";
import { usePokemonArray } from "@/hooks/usePokemonArray";
import { Pokemon } from "@/types/types";


const FilterablePokedexTable = () => {
  const [selectedTypes, setSelectedTypes] = useState("");
  const [pokemonArray,setPokemonArray] = useState<Pokemon[]>([]);

  const { data } = usePokemonByType(selectedTypes);

 useEffect(() => {
  if(data) {
    setPokemonArray(data);
  }
 },[data])

  const handleTypeSelection = (type:any) => {
    setSelectedTypes(type);
  };
  return (
    <>
      <PokemonTypeSelection
        selectedType={selectedTypes}
        selectType={handleTypeSelection}
      />
      {data && data.length > 0 && (
        <PokedexTable pokemons={pokemonArray} />
      )}
    </>
  );
};

export default FilterablePokedexTable;
