import { useEffect, useRef, useState } from "react";
import useDataFetch from "../hooks/DataFetch";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ searchValue }) => {
    const {
        allPokemonsData,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetchingNextPage,
    } = useDataFetch();

    const [filteredData, setFilteredData] = useState([]);
    const loadMoreRef = useRef(null);

    // Filter logic
    useEffect(() => {
        if (searchValue) {
            const filtered = allPokemonsData?.filter((el) =>
                el?.forms[0]?.name?.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(allPokemonsData);
        }
    }, [searchValue, allPokemonsData]);

    // IntersectionObserver to trigger loading more
    useEffect(() => {
        if (!hasNextPage || searchValue) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 1.0,
            }
        );

        const currentRef = loadMoreRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [hasNextPage, isFetchingNextPage, fetchNextPage, searchValue]);

    if (isLoading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center gap-2 font-semibold">
                <div className="w-12 h-12 border-4 border-dashed border-red-500 rounded-full animate-spin"></div>
                Loading...
            </div>
        );
    }

    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-6 mt-4">

            {/* Displaying all cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {filteredData?.map((el, index) => (
                    <PokemonCard key={index} pokemon={el} />
                ))}
            </div>

            {/* div that triggers loading when in view */}
            <div ref={loadMoreRef} className="h-10" />

            {/* Optional spinner when fetching next page */}
            {isFetchingNextPage && (
                <div className="mb-8 flex items-center justify-center gap-3 text-base text-blue-500 font-medium animate-pulse">
                    <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
                    Loading more Pokémon...
                </div>
            )}

        </div>
    );
};

export default PokemonList;
