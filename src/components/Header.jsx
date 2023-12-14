import { Logo } from "./Logo"
import { Nav } from "./Nav"

let Header = () => {
    return (
        <header className="bg-white sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between shadow-md">
            <span>Logo</span>
            <Nav />
        </header>
    )
}

export { Header }