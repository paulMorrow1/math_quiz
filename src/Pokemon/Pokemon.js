import useGetPokemon from "./useGetPokemon";

const Pokemon = ({ pokemonName }) => {
  const data = useGetPokemon({ pokemonName });
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Pokemon;
