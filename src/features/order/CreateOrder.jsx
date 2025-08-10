import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="bg-stone-300 p-8 rounded-xl shadow">
      <h2 className="text-center font-bold text-3xl tracking-wider mb-6">Ready to order? Let's go!</h2>

      <Form method="POST" className="flex flex-col gap-4">
        <div className="flex items-left gap-2 flex-col"> 
          <label className="text-lg">First Name</label>
          <input className="border-2 border-stone-500 w-100 rounded px-4 py-1" type="text" name="customer" required />
        </div>

        <div className="flex items-left gap-2 flex-col">
          <label className="text-lg">Phone number</label>
          <input className="border-2 border-stone-500 w-100 rounded px-4 py-1" type="tel" name="phone" required />
        </div>

        <div className="flex items-left gap-2 flex-col">
          <label className="text-lg">Address</label>
          <input className="border-2 border-stone-500 w-100 rounded px-4 py-1" type="text" name="address" required />
        </div>

        <div className="flex items-left gap-1 flex-row items-center">
          <input
            className="w-6 h-4"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="btn">Order now</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on'
  }

  const newOrder = await createOrder(order)

  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder;
