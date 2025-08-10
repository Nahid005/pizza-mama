// Test ID: IIDSAT

import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utility/helpers";
import OrderItem from "./OrderItem";


function Order() {

  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <h2>Order {id} Status</h2>

        <div className="flex gap-2">
          {priority && <span className="bg-green-700 px-4 py-2 text-sm rounded-full text-white">Priority</span>}
          <span className="bg-red-700 px-4 py-2 text-sm rounded-full text-white">{status} order</span>
        </div>
      </div>

      <div className="bg-stone-200 p-4 flex flex-col gap-2 rounded-lg shadow">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="flex flex-col gap-2">
        {cart.map(cartItem => <OrderItem item={cartItem} />)}
      </ul>

      <div className="bg-stone-200 p-4 flex flex-col gap-2 rounded-lg shadow">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}) {
  const order = await getOrder(params.orderId);

  return order;
}

export default Order;
