import { React } from "react";
// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helper";
import { getOrder } from "../../services/APIResturant";
import { useLoaderData } from "react-router-dom";


function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order=useLoaderData()
  const {
    // id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}){ //SINCE WE CAN'T USE useParam HOOK TO GET ROUTE PARAMS SO,PARAM IS A OBJECT PROVIDED BY REACT TO ACTUALLY GET ROUTE PARAM USING REACT ROUTES.

 const order =await getOrder(params.orderId); //orderID KEYWORD SHOULD BE SAME AS DEFINE IN PATH (IN APP.JSX) TO ACTUALLY GET DEFINED (orderID)

 return order;
}
export default Order;
