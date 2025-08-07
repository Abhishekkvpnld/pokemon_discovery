import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch 6 Pokémon list (URLs) per page using limit & offset
const fetchPokemonPage = async ({ pageParam = 0 }) => {
  const limit = 6;
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pageParam}`);
  const pokemonList = res.data.results;

  // Fetch details of each Pokémon
  const details = await Promise.all(pokemonList?.map(p => axios.get(p?.url)));
  const fullData = details?.map(d => d.data);

  return {
    pokemons: fullData,
    nextOffset: pageParam + limit,
    hasMore: !!res.data.next,
  };
};

const useDataFetch = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemonPage,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextOffset : undefined,
  });

  // Combine all pages into one array
  const allPokemonsData = data?.pages?.flatMap(page => page.pokemons);

  return {
    allPokemonsData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    error,
    isSuccess: status === "success",
  };
};

export default useDataFetch;
