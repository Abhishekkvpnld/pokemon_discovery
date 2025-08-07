import { useState } from "react";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";



const Pokemon = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center justify-center bg-gray-200 flex-col w-full">
      <Navbar search={search} setSearch={setSearch} />
      <PokemonList searchValue={search} />
    </div>
  )
}

export default Pokemon