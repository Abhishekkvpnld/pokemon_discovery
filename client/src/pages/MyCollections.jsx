import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import toast from "react-hot-toast";

const MyCollections = () => {
  const [collections, setCollections] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

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
    toast.error("Removed From Collections");
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const updated = [...collections];
    const draggedItem = updated[draggedIndex];
    updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedItem);

    setCollections(updated);
    localStorage.setItem("pokemon_collections", JSON.stringify(updated));
    setDraggedIndex(null);
  };

  return (
    <>
      <Navbar />
      <div className="p-4 bg-slate-200 min-h-[100vh]">
        <h2 className="text-xl font-bold text-slate-400 mb-4">My Saved Pokémon</h2>

        {collections?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 w-full text-gray-500">
            <span className="text-4xl mb-2">🐾</span>
            <p className="text-lg font-medium">No Pokémon saved yet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {collections.map((pokemon, index) => (
              <div
                key={pokemon.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
              >
                <PokemonCard
                  pokemon={pokemon}
                  collection={true}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyCollections;
