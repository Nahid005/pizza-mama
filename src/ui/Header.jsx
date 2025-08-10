import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

function Header() {
    const userName = useSelector(state => state.user.name)

    return (
        <header className="sticky top-0 w-full bg-stone-200 grid grid-cols-3 items-center p-4">
            <Link className="text-black font-bold text-xl tracking-wider" to='/'> 🍕 Pizza Mama</Link>
            <SearchOrder />
            <p className="font-bold text-lg text-black text-right">{userName}</p>
        </header>
    )
}

export default Header;