import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItem, getCartsItems } from './cartSlice';
import Empty from '../../ui/Empty';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCartsItems);
  const userName = useSelector(state => state.user.name)

  function handleClearCart() {
    dispatch(clearCartItem())
  }

  if(!cart.length > 0) return <Empty />

  return (
    <div className='bg-stone-300 p-6 rounded-lg shadow'>
      <Link className='font-bold text-lg tracking-wide hover:underline hover:text-orange-500' to="/menu">&larr; Back to menu</Link>
      <h2 className='title'>Your cart, {userName}</h2>
      <ul className='flex flex-col gap-2'>
        {
          cart.map(pizza => <CartItem key={pizza.pizzaId} item={pizza} />)
        }
      </ul>
      <div className='mt-4 flex gap-2 justify-start items-center'>
        <Link className='btn' to="/order/new">Order pizzas</Link>
        <button className='btn' onClick={handleClearCart}>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
