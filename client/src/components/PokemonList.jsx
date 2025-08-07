import { useEffect, useState } from "react";
import useDataFetch from "../hooks/DataFetch";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ searchValue }) => {
    const allPokemonData = useDataFetch();
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        if (searchValue) {
            const filtered = allPokemonData?.allPokemonsData?.filter((el) =>
                el?.forms[0]?.name?.toLowerCase().includes(searchValue.toLowerCase())
            );

            console.log(filtered)
            setFilteredData(filtered);
        } else {
            setFilteredData(allPokemonData?.allPokemonsData);
        }
    }, [searchValue, allPokemonData?.allPokemonsData]);

    return (
        <div className="w-screen min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-6">
            {filteredData?.map((el, index) => (
                <PokemonCard key={index} pokemon={el} />
            ))}
        </div>
    );
};

export default PokemonList;
