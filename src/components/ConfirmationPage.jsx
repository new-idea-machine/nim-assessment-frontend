import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import OrderConfirmation from "./OrderConfirmation";
import styles from "./styles/ConfirmationPage.module.css";

function ConfirmationPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  const getOrder = async (orderId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/orders/order/${orderId}`
      );

      // if (!response.ok) {
      //   console.log("pointA", pointA);
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      const data = await response.json();
      setOrder(data);
    } catch (error) {
      setOrder(error);
    }
  };

  useEffect(() => {
    getOrder(id);
  }, [id]);

  return (
    <div className={styles["confirmation-page"]}>
      {order ? <OrderConfirmation order={order} /> : <p>Loading order..</p>}
    </div>
  );
}

export default ConfirmationPage;
