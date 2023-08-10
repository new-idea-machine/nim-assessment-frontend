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

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setOrder(data);
    } catch (error) {
      setOrder(null);
    }
  };

  useEffect(() => {
    getOrder(id);
  }, [id]);

  return (
    <div className={styles["confirmation-page"]}>
      {order ? (
        <OrderConfirmation
          name={order.name}
          address={order.address}
          items={order.items}
          id={order.id}
        />
      ) : (
        <p>Loading order..</p>
      )}
    </div>
  );
}

export default ConfirmationPage;
