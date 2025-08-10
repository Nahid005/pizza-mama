import {createBrowserRouter} from "react-router"
import { RouterProvider } from "react-router/dom"

import Layout from "./ui/Layout"
import Home from "./ui/Home"
import Menu , {loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder"
import Order, {loader as orderLoader} from "./features/order/Order"
import Error from "./utility/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />
      }
    ]
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
