/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/api/orders/${id}`);
        console.log(response);
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [id]);

  return (
    <div>
      {order ? (
        <OrderConfirmation order={order} />
      ) : (
        <p>Loading order information...</p>
      )}
    </div>
  );
}

export default ConfirmationPage;
