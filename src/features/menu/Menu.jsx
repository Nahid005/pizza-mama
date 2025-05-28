import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menus = useLoaderData();

  return (
    <ul>
      {
        menus.map(pizza => <MenuItem pizza={pizza} key={pizza.id}  />)
      }
    </ul>
  )
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
