import { useEffect, useState } from "react";
import { TopHeader } from "../TopHeader/TopHeader";
import { getOrders } from "./service/service";
import { OrderCard } from "./OrderCard/OrderCard";
import { Alert } from "@mui/material";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const ordersResponse = getOrders();
    if (ordersResponse) {
      setOrders(getOrders());
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, []);

  const OrdersCards = ({ orders }) => {
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
      {orders.length !== 0 && <OrdersCards orders={orders} />}
      {notFound && (
        <Alert severity="warning" variant="outlined">
          No orders found.
        </Alert>
      )}
    </>
  );
};
