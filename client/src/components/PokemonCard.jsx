import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";



const PokemonCard = ({ pokemon, collection = false }) => {

    const [availableInCollection, setAvailableInCollection] = useState(false);

    const handleAddToCollections = (pokemon) => {
        const existing = JSON.parse(localStorage.getItem('pokemon_collections')) || [];

        const isExist = existing.find(p => p?.id === pokemon?.id);
        let updated;

        if (isExist) {
            // Remove from collection
            updated = existing.filter(p => p.name !== pokemon.name);
            setAvailableInCollection(false);
        } else {
            // Add to collection
            updated = [...existing, pokemon];
            setAvailableInCollection(true);
        }
        localStorage.setItem('pokemon_collections', JSON.stringify(updated));
    };

    useEffect(() => {
        const collections = JSON.parse(localStorage.getItem('pokemon_collections')) || [];
        const isExist = collections.some(el => el?.id === pokemon?.id);
        setAvailableInCollection(isExist);
    }, [pokemon]);



    return (
        <div className="bg-white shadow-lg hover:scale-105 transition-all rounded-xl p-4 text-center relative">
            <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon?.name}
                className="mx-auto h-40 w-40"
            />
            <h2 className="font-bold capitalize text-lg mt-2">{pokemon?.name}</h2>

            <div className="mt-1 text-sm text-gray-600">
                {pokemon?.types?.map((typeInfo) => (
                    <span
                        key={typeInfo?.type?.name}
                        className="inline-block bg-blue-100 text-blue-800 px-2 py-1 m-1 rounded-full text-xs"
                    >
                        {typeInfo?.type?.name}
                    </span>
                ))}
            </div>

            <div className="mt-2 text-sm flex items-center justify-between text-gray-700 space-y-1">

                <div className="flex items-center justify-center flex-col">
                    <p className="font-bold text-green-600">{pokemon?.stats[0]?.base_stat}</p>
                    <h1 className="font-semibold">HP</h1>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <p className="font-bold text-blue-600"> {pokemon?.stats[1]?.base_stat}</p>
                    <h1 className="font-semibold">Attack</h1>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <p className="font-bold text-red-600"> {pokemon?.stats[2]?.base_stat}</p>
                    <h1 className="font-semibold">Defense</h1>
                </div>

            </div>

            {
                !collection && (
                    <div onClick={() => handleAddToCollections(pokemon)} title={`${!availableInCollection ? 'Add To Collection' : "Remove From Collection"}`} className={`absolute hover:animate-pulse cursor-pointer border-gray-300 ${availableInCollection ? "bg-red-600 p-0.5" : 'bg-green-600'} flex items-center justify-center top-0 right-0 m-3 border rounded-full`}>
                        {
                            availableInCollection ? <Trash2 className="font-bold hover:scale-105 transition-all" color="white" /> : <Plus className="font-bold hover:scale-105 transition-all" color="white" />
                        }
                    </div>
                )
            }
        </div>
    );
};

export default PokemonCard;
