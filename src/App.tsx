import { Navbar } from "./components/layout"
import { ChatBox } from "./components/ui"
import useTheme from "./hooks/useTheme"

const App = () => {
    const { theme } = useTheme()

    return (
        <>
            <div className={`min-h-screen p-4 ${theme === 'light' ? 'bg-[#FAFAFA] text-black' : 'bg-[#0B0F19] text-white'}`}>
                <header>
                    <Navbar />
                </header>

                <main className="p-4">
                    <ChatBox />
                </main>
            </div>
        </>
    )
}

export default App