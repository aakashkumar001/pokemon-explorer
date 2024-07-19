export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

export interface PokemonRowProps {
  pokemon: Pokemon;
}

export type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

export interface PokedexTableProps {
  pokemons: Pokemon[];
}
