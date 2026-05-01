import { BiSend } from "react-icons/bi";

export default function ChatBox() {
    const isOnline = navigator.onLine;

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-3xl h-full sm:h-[90vh] flex flex-col bg-white/5 backdrop-blur-xl border border-black rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                    <h2 className="font-semibold text-lg">NeuroDesk - AI</h2>

                    {isOnline ? (
                        <span className="text-xs text-blue-400">Online</span>
                    ) : (
                        <span className="text-xs text-red-400">Offline</span>
                    )}
                </div>

                {/* Messages (Static UI) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {/* Bot Message */}
                    <div className="flex justify-start">
                        <div className="px-4 py-2 rounded-2xl max-w-[75%] text-sm sm:text-base shadow bg-gray-800 text-gray-200 rounded-bl-none">
                            Hey 👋 How can I help you?
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                        <div className="px-4 py-2 rounded-2xl max-w-[75%] text-sm sm:text-base shadow bg-blue-600 text-white rounded-br-none">
                            This is a user message
                        </div>
                    </div>
                </div>

                {/* Input (UI Only) */}
                <div className="p-3 border-t border-white/10 flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-xl outline-none text-sm sm:text-base"
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl text-white cursor-pointer">
                        <BiSend size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
