import * as React from "react";
import Pokemon from "./Pokemon";

export default function PokemonWrapper() {
  return (
    <div>
      <Pokemon />
      <hr />
      <Pokemon pokemonName="charizard" />
    </div>
  );
}
