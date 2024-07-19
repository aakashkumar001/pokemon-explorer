import React from "react";
import { PokemonTypeSelectionProps } from "@/types/types";

const searchTypes = ["grass", "fire", "water", "electric", "poison"];

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectType,
  selectedType,
}) => {
  const handleChange = (type: string) => {
    selectType(type);
    console.log(type);
  };

  return (
    <div className="flex items-center justify-center">
      <h3 className="font-bold text-2xl text-green-500">Select By Type</h3>
      {searchTypes.map((type) => (
        <label key={type} className="flex items-center gap-2">
          <input
            type="radio"
            name="pokemon-type"
            value={type}
            checked={selectedType === type}
            onChange={() => selectType(type)}
          />
          {type}
        </label>
      ))}
      <button onClick={() => selectType(undefined)}>Clear Selection</button>
    </div>
  );
};

export default PokemonTypeSelection;
