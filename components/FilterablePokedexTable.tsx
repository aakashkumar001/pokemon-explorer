import { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection"
import { usePokemonByType } from "@/hooks/usePokemonByType";
import PokedexTable from "./PokedexTable";



const FilterablePokedexTable = () => {
    const [selectedTypes, setSelectedTypes] = useState("");

    const {data} = usePokemonByType(selectedTypes)
    console.log(data)

    const handleTypeSelection = (type: string | undefined) => {
        setSelectedTypes(type);
      };
  return (
    <>
     <PokemonTypeSelection selectedType={selectedTypes} selectType={handleTypeSelection}/>
     {data && data.length > 0 && (
     <PokedexTable pokemonNames={data?.map((pokemon) => pokemon.name)} />
     ) }
    </>
  )
}

export default FilterablePokedexTable