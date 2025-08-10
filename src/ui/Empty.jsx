import { Link } from "react-router";

function Empty() {
    return (
        <div className="">
            <Link to="/menu">Start Ordering</Link>
            <h1>Your cart is still empty plese select pizza</h1>
        </div>
    )
}

export default Empty;