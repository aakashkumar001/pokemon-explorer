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
    <>
    <div className="flex items-center justify-center gap-2">
      {searchTypes.map((type) => (
        <label key={type} className="flex items-center justify-center gap-2">
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

      
    </div>
    <div className="w-full flex justify-center items-center p-1">
    <Button
    variant="contained"
    color="secondary"
    onClick={() => selectType(undefined)}
  >
    Clear Selection
  </Button>
    </div>
  </>
  );
};

export default PokemonTypeSelection;
