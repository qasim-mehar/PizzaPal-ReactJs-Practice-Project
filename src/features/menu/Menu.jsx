import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/APIResturant";
function Menu() {
 const menu =useLoaderData();
  console.log(menu);
}
export async function loader() {
  const menu=await getMenu();
 return menu;
}
export default Menu;
