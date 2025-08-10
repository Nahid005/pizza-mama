import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getCartsItems } from "../features/cart/cartSlice";

function Layout() {
    const natvigation = useNavigation();
    const isLoading = natvigation.state === 'loading';
    const cartItems = useSelector(getCartsItems);
    
    return(
        <div className="flex flex-col h-screen bg-stone-100">
            {isLoading && <Loader />}
            <Header />
            <main className="flex-1 overflow-y-auto p-5 max-w-5/6 mx-auto">
                <Outlet />
            </main>
            {
                cartItems.length > 0 && <CartOverview />
            }
        </div>
    )
}

export default Layout;