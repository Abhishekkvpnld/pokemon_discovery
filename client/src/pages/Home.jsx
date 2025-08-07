import HomeButton from "../components/HomeButton";



const Home = () => {

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-slate-100 bg-cover bg-center"
      style={{
        backgroundImage: "url('/pokemon.jpeg')",
      }}
    >
      <h1 className="text-xl text-center mx-2 md:text-3xl text-white font-bold mb-6 animate-fadeIn">
        Welcome to Pokémon World
      </h1>
      <HomeButton />
    </div>
  );
};

export default Home;