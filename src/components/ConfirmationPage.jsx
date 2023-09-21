import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import OrderConfirmation from "./OrderConfirmation";
// import { testOrder } from "../sampleTestData"
import "./styles/confirmation.css";

function ConfirmationPage() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const getOrders = async () => {
    const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    setOrder(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return <section>{order.id && <OrderConfirmation order={order} />}</section>;
}

export default ConfirmationPage;
