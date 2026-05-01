import { BiCog, BiMessageSquare, BiTrash, BiX } from "react-icons/bi";
import { Logo } from "../ui";

interface SidebarProps {
    onClose: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden hidden"></div>

            <aside className="fixed top-0 left-0 h-full w-70 bg-[#020617] text-gray-300 border-r border-white/10 z-50 flex flex-col transition-all duration-300" onClick={onClose}>

                {/* Header */}
                <header className="p-4 border-b border-white/10 flex items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Close Button (Mobile Only) */}
                    <button className="p-2 rounded-lg hover:bg-white/10 transition" onClick={onClose}>
                        <BiX size={30} />
                    </button>

                </header>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-3 space-y-2">

                    <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition text-left cursor-pointer">
                        <BiMessageSquare size={18} />
                        <span className="truncate text-sm">How to learn React?</span>
                    </button>

                    <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition text-left">
                        <BiMessageSquare size={18} />
                        <span className="truncate text-sm">Build AI chatbot UI</span>
                    </button>

                    <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition text-left">
                        <BiMessageSquare size={18} />
                        <span className="truncate text-sm">JavaScript interview prep</span>
                    </button>

                </nav>

                {/* Footer */}
                <footer className="p-3 border-t border-white/10 space-y-2">

                    <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition text-left">
                        <BiTrash size={18} />
                        <span className="text-sm">Clear Conversations</span>
                    </button>

                    <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition text-left">
                        <BiCog size={18} />
                        <span className="text-sm">Settings</span>
                    </button>

                </footer>

            </aside>
        </>
    )
}

export default Sidebar;