import { useState, useEffect } from "react";
import { useParams } from "react-router";
import OrderConfirmation from "./OrderConfirmation";
import styles from "./styles/Confirmation.module.css"

export default function ConfirmationPage() {
  const [order, setOrder] = useState();
  const { id } = useParams();

  const getOrder = async () => {
    const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    setOrder(data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className={styles.container}>
      {order && <OrderConfirmation order={order} />}
    </div>
  );
}
