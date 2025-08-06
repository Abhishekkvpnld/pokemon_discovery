import { useState } from "react";
import { Heart, Menu, X } from "lucide-react"; // lucide-react icons
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
            {/* Left: Logo/Icon */}
            <Link to={"/"} className="flex items-center space-x-2">
                <img src="/pokeball.png" alt="Logo" className="h-8 w-8 hover:animate-spin cursor-pointer transition-all" />
                <span className="font-bold text-lg">PokeApp</span>
            </Link>

            {/* Center: Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                <li className="hover:scale-110 transition-all">
                    <a href="/">Home</a>
                </li>
            </ul>


            {/* Right: Favorites + Search + Menu Toggle */}
            <div className="flex items-center space-x-4">
                {/* Favorites Icon */}
                <a
                    title="My Collections"
                    href="/my-collections"
                    className="text-gray-700 hover:text-red-500 hover:border hover:rounded-full p-1"
                >
                    <Heart className="hover:scale-105 transition-all" />
                </a>

                {/* Search Box (visible on md and up) */}
                <div className="hidden md:block">
                    <input
                        type="text"
                        placeholder="Search Pokémon..."
                        className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>

                {/* Mobile Menu Toggle (visible on small screens) */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>



            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
                    <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
                        {/* Search Box */}
                        <li>
                            <input
                                type="text"
                                placeholder="Search Pokémon..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </li>

                        {/* Menu Links */}
                        <li>
                            <a href="/" className="block w-full">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/my-collections"
                                className="flex items-center justify-between w-full space-x-2"
                            >
                                <span>My Collections</span>
                                <Heart />
                            </a>
                        </li>
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
