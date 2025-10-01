import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import Home from "./ui/Home"
import Error from "./ui/Error"
import Menu ,{loader as menuLoader} from "./features/menu/Menu"
// import Cart from "./features/cart/CartOverview";
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder"
import Order, {loader as orderLoader} from "./features/order/Order"
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";

const router=createBrowserRouter([
  //WE USE THIS PERTICULAR IMPERITIVE WAY TO DECLARE ROUTES ONLY BECAUSE HERE WE CAN LOAD DATA UNLICE OLD BROWSERROUTE> ROUTES WAY.
  {
    element:<AppLayout/>, //SINCE, IT DOESN'T HAVE A PATH SO IN REACT WE CALL IT A LAYOUT ROUTE
    errorElement:<Error/>, //II WILL AUTONOMUSLY HANDLE ERRORS IF WE TRY WRONG URL OR UNABLE TO FETCH DATA ETC.
    children:[
      {
    path:"/",
    element: <Home/>
  },
  {
    path:"/menu",
    element:<Menu/>,
    loader: menuLoader, //WE PERTICULARLY USE THIS KEY VALUE TO HANDLE ERROR WHILE FETCHING DATA
    errorElement:<Error/>,
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"order/new",
    element: <CreateOrder/>,
    action:createOrderAction,
  },
  {
   path: "/order/:orderId", //orderId WILL BE THE ACTUAL NAME OF OUR PARAM
   element: <Order/>,
   loader: orderLoader, //WHEN WE PROVIDE THIS LOADER ON CERTAIN ROUTE NAVIGATION WE ALSO PROVIDE THE LOADED DATA WHICH WE CAN ACCESS USING useRouteData HOOK
   errorElement: <Error/>

  }
    ]
  }

])

function App() {
  return <RouterProvider router={router}/>
}

export default App;