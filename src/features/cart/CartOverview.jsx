import { useSelector } from "react-redux";
import { Link } from "react-router";
import { getTotalCartPrice, getTotalCartQty } from "./cartSlice";

function CartOverview() {
  
  const totalCartItems = useSelector(getTotalCartQty);
  const totalCartPrice = useSelector(getTotalCartPrice);

  console.log(totalCartItems, totalCartPrice)

  return (
    <footer className="bg-stone-900 flex justify-between sticky bottom-0 w-full p-4 items-center">
      <p className="flex gap-2 font-bold text-lg text-white tracking-wide">
        <span>{totalCartItems} pizzas</span>
        <span>{totalCartPrice}</span>
      </p>
      <Link className="font-bold text-lg text-white tracking-wide" to="/cart">Open cart &rarr;</Link>
    </footer>
  );
}

export default CartOverview;
