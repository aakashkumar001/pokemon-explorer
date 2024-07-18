import React from "react";


type PokemonTypeSelectionProps = {
    selectedType: string | undefined;
    selectType: (type: string | undefined) => void;
  }


const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({ selectType, selectedType}) => {
    const types = ['grass', 'fire', 'water', 'electric','poison'];

    const handleChange = (type: string) => {
      selectType(type);
      console.log(type)
    };

  return (
    <div>
    <h3>Select a Pokemon Type</h3>
    {types.map((type) => (
      <label key={type}>
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
  )
}

export default PokemonTypeSelection