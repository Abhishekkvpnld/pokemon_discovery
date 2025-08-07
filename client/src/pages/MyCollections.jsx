import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";


const MyCollections = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("pokemon_collections");
        if (stored) {
            setCollections(JSON.parse(stored));
        }
    }, []);

    const handleDelete = (id) => {
        const updated = collections.filter((item) => item.id !== id);
        localStorage.setItem("pokemon_collections", JSON.stringify(updated));
        setCollections(updated);
    };

    return (
        <>
            <Navbar />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">My Saved Pokémon</h2>

                {collections?.length === 0 ? (
                    <p>No Pokémon saved yet.</p>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {collections?.map((pokemon, index) => (
                            <PokemonCard pokemon={pokemon} key={index} collection={true}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default MyCollections;
