import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import Home from "./ui/Home"
import Menu ,{loader as menuLoader} from "./features/menu/Menu"
// import Cart from "./features/cart/CartOverview";
import CreateOrder from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";

const router=createBrowserRouter([
  //WE USE THIS PERTICULAR IMPERITIVE WAY TO DECLARE ROUTES ONLY BECAUSE HERE WE CAN LOAD DATA UNLICE OLD BROWSERROUTE> ROUTES WAY.
  {
    element:<AppLayout/>, //SINCE, IT DOESN'T HAVE A PATH SO IN REACT WE CALL IT A LAYOUT ROUTE
    children:[
      {
    path:"/",
    element: <Home/>
  },
  {
    path:"/menu",
    element:<Menu/>,
    loader: menuLoader
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"order/new",
    element: <CreateOrder/>
  },
  {
   path: "/order/:orderId",
   element: <Order/>
  }
    ]
  }

])

function App() {
  return <RouterProvider router={router}/>
}

export default App;