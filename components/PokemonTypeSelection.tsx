import React from "react";
import { PokemonTypeSelectionProps } from "@/types/types";
import { Button } from "@mui/material";


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
    <div className="flex items-center justify-center gap-2">
      <h3 className="font-bold text-2xl text-blue-500">Select By Type</h3>
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
      <Button variant="contained" color="secondary" onClick={() => selectType(undefined)}>Clear Selection</Button>
    </div>
    
  );
};

export default PokemonTypeSelection;
