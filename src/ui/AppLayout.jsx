import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import React from "react";
import CartOverview from "../features/cart/CartOverview"
import Loader from "./Loader";
function AppLayout() {
  const navigation= useNavigation();
  const isLoadding=navigation.state==="loading"
  return (
    <div className="layout">
     {isLoadding&&<Loader/>}
      <Header/>
      <main>

        <Outlet/>
      </main>
      <CartOverview/>
    </div>
  );
}

export default AppLayout;