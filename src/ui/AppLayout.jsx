import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import React from "react";
import CartOverview from "../features/cart/CartOverview"
import Loader from "./Loader";
import SearchOrder from "../features/order/searchOrder";


function AppLayout() {
  const navigation= useNavigation();
  const isLoadding=navigation.state==="loading"
  return (
    <div className="layout">
     {isLoadding&&<Loader/>}
      <Header/>
      <SearchOrder/>
      <main>

        <Outlet/>
      </main>
      <CartOverview/>
    </div>
  );
}

export default AppLayout;