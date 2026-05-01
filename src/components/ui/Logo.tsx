import LogoIcon from '/neurodesk-logo.webp'

const Logo = () => {
    return (
        <div className="flex items-center cursor-pointer">

            {/* Logo → visible on mobile, hidden on md+ */}
            <img
                src={LogoIcon}
                alt="NeuroDesk AI Assistant Logo"
                loading="lazy"
                className="block md:hidden w-15 h-15 object-contain"
            />

            {/* Title → hidden on mobile, visible on md+ */}
            <span className="hidden md:block text-lg md:text-xl font-semibold font-mono tracking-tight text-white">
                NeuroDesk
            </span>

        </div>
    );
}

export default Logo