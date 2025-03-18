import { useState } from "react"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className="bg-blue-500 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-xl font-bold">Logo</div>

                {/* Menu en desktop */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </div>

                {/* Logo */}
                <div className="
                    hidden 
                    md:flex 
                    flex-row 
                    items-center
                    gap-4"
                >
                    <a href="#" className="text-white hover:text-gray-300">Login</a>

                    <button
                        className="
                        border-2
                        border-gray-200
                        rounded-8
                        cursor-pointer
                        p-2
                        "
                    >
                        Sign Up
                    </button>
                </div>

                {/* Botón de hamburguesa */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setOpenMenu(prev => !prev)} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú desplegable en móvil */}
            {openMenu && (
                <div className="md:hidden bg-blue-500 p-4 space-y-4">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar