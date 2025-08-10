import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQty({pizzaId, currentQty}) {
    const dispatch = useDispatch();

    return (
        <div className="">
            <button onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</button>
            <span>{currentQty}</span>
            <button onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</button>
        </div>
    )
}

export default UpdateItemQty;