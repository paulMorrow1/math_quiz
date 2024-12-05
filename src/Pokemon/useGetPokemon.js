import * as React from "react";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export default function useGetPokemon({ pokemonName = "" } = {}) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch(`${BASE_URL}/${pokemonName?.toLowerCase()}`)
      ).json();
      setData(data?.results || data);
    };
    fetchData();
  }, []);

  return data;
}
