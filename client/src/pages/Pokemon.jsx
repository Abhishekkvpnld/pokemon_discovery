import Navbar from "../components/Navbar";
import useDataFetch from "../hooks/DataFetch";


const Pokemon = () => {

  const data = useDataFetch();
  console.log(data?.allPokemonsData)

  return (
    <>
      <Navbar />
    </>
  )
}

export default Pokemon