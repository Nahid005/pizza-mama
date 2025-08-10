import { useDispatch } from "react-redux";
import { deleteCartItem } from "./cartSlice";

function DeleteItem({pizzaId}) {
    const dispatch = useDispatch()
    function handleItemDelete() {
        dispatch(deleteCartItem(pizzaId))
    }

    return (
        <button className="cursor-pointer" onClick={handleItemDelete}>Delete</button>
    )
}

export default DeleteItem;