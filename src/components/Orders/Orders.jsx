import { useEffect, useState } from "react";
import { TopHeader } from "../TopHeader/TopHeader";
import { getOrders } from "./service/service";
import { OrderCard } from "./OrderCard/OrderCard";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const getOrderCards = (orders) => {
    return (
      orders.length &&
      orders.map((order) => (
        <OrderCard
          orderId={order.order_id}
          placedOn={order.createdAt}
          key={order.order_id}
        />
      ))
    );
  };

  return (
    <>
      <TopHeader pageHeader={"My Orders"} />
      {getOrderCards(orders)}
    </>
  );
};
