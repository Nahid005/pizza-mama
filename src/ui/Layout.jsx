import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function Layout() {
    const natvigation = useNavigation();
    const isLoading = natvigation.state === 'loading';

    return(
        <div className="layout">
            {isLoading && <Loader />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}

export default Layout;