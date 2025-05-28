import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
    return (
        <header>
            <Link to='/'>Pizza Mama</Link>
            <SearchOrder />
            <p>Nahid Hassan</p>
        </header>
    )
}

export default Header;