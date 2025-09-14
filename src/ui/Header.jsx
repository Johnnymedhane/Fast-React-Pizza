import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/users/Username"

function Header() {
    return (
        <header className="bg-yellow-400 sm:px-6 uppercase  py-3  flex items-center  justify-between border-b border-stone-200">
            <Link to="/" className="tracking-widest">
                Fast Pizza Co.
            </Link>
            <SearchOrder />
            <Username />
        </header>
    )
}

export default Header

