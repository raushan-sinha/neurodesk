import { useState } from "react";
import { BiMenu, BiMoon, BiPlus, BiSun, BiUser } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { Logo } from "../ui";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
    //todo: Open & Close Sidebar -
    const [sidebarOpen, isSidebarOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme()

    return (
        <>
            <header className="h-14 w-full flex items-center justify-between px-4 bg-[#0f172a]/80 text-gray-200 border border-gray-300 backdrop-blur-xl sticky top-0 z-50 rounded-xl">

                {/* Left Section */}
                <div className="flex items-center gap-3">
                    {/* Sidebar Toggle */}
                    <button
                        className="p-2 rounded-lg bg-white/20 hover:bg-white/10 transition cursor-pointer"
                        onClick={() => isSidebarOpen(true)}
                        aria-label="Open sidebar menu">
                        <BiMenu size={20} />
                    </button>

                    {/* App Name */}
                    <Logo />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 lg:gap-4">
                    {/* New Chat */}
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm bg-white/20 transition cursor-pointer text-gray-300 hover:text-white" aria-label="Open New Chat UI">
                        <BiPlus size={16} />
                        <span className="hidden sm:inline cursor-pointer">New Chat</span>
                    </button>

                    {/* Theme Toggle */}
                    <button className="p-2 rounded-lg hover:bg-white/10 transition cursor-pointer text-gray-300 hover:text-white" aria-label="Change Them - Dark or Light" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === 'light' ? (
                            <BiMoon size={20} />
                        ) : (
                            <BiSun size={20} />
                        )}
                    </button>

                    {/* Profile Placeholder */}
                    <div className="w-8 h-8 rounded-full bg-white/20 text-gray-200 flex items-center justify-center text-sm cursor-pointer">
                        <BiUser size={20} />
                    </div>
                </div>
            </header>

            {sidebarOpen && (
                <Sidebar onClose={() => isSidebarOpen(false)} />
            )}
        </>
    )
}

export default Navbar;