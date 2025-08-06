import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPokemonsList = async () => {
  const api = "https://pokeapi.co/api/v2/pokemon";
  const response = await axios.get(api);
  return response?.data?.results;
};

const fetchPokemonDetails = async (urls) => {
  const responses = await Promise.all(urls?.map((url) => axios.get(url)));
  return responses?.map((res) => res?.data);
};

const useDataFetch = () => {
  // Get the list of Pokémon URLs
  const {
    data: pokemonList,
    error,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonsList,
  });

  // Get full data for each Pokémon
  const {
    data: allPokemonsData,
    isLoading: isDetailsLoading,
    isSuccess: isDetailsSuccess,
  } = useQuery({
    queryKey: ["pokemonDetails", pokemonList],
    queryFn: () => fetchPokemonDetails(pokemonList?.map((p) => p?.url)),
    enabled: !!pokemonList, // only run when pokemonList is available
  });

  return {
    allPokemonsData,
    isLoading: isLoading || isDetailsLoading,
    isSuccess: isSuccess && isDetailsSuccess,
    error,
  };
};

export default useDataFetch;
