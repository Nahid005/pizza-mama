import { useSelector } from "react-redux";
import { formatCurrency } from "../../utility/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQty from "./UpdateItemQty";
import { getCurrentQtyById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuentity = useSelector(getCurrentQtyById(pizzaId));

  return (
    <li className="flex justify-between gap-2 border-b-1 border-stone-400 pb-2">
      <p className="text-lg">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-lg">{formatCurrency(totalPrice)}</p>
        <UpdateItemQty pizzaId={pizzaId} currentQty={currentQuentity}/>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
