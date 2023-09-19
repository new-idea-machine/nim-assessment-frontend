import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import OrderConfirmation from "./OrderConfirmation";
import styles from "./styles/Order.module.css";

function ConfirmationPage() {
  const [order, setOrder] = useState({
    id: null,
    name: null,
    address: null,
    items: []
  });
  const { id } = useParams();

  const getOrder = async (orderId) => {
    const response = await fetch(`/api/orders/${orderId}`);
    const data = await response.json();
    setOrder(data);
  };

  useEffect(() => {
    getOrder(id);
  }, []);

  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <OrderConfirmation order={order} />
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
