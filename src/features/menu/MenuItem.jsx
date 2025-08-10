import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utility/helpers";
import { addCartItem, getCurrentQtyById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQty from "../cart/UpdateItemQty";

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQtyById = useSelector(getCurrentQtyById(id))
  const isInCart = currentQtyById > 0;

  function handleOrder() {
    const cartItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1
    }

    dispatch(addCartItem(cartItem))
  }

  return (
    <li className={`bg-stone-200 p-4 flex gap-2 grow items-center rounded shadow ${soldOut ? 'grayscale-100' : 'grayscale-0'}`}>
      <img className="w-35" src={imageUrl} alt={name} />
      <div className="flex flex-col grow h-full">
        <p className="font-bold tracking-wider text-xl">{name}</p>
        <p className="text-lg">{ingredients.join(', ')}</p>
        <div className="text-lg flex items-end justify-between grow">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {isInCart && <>
            <UpdateItemQty pizzaId={id} currentQty={currentQtyById} />
            <DeleteItem pizzaId={id} />
          </>}
          {!soldOut && !isInCart && <button className="btn-sm cursor-pointer" onClick={handleOrder}>Add to cart</button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
