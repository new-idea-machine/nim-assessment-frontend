import { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./styles/OrderConfirmation.module.css";

import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const getOrder = async () => {
    const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    setOrder({ ...data });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className={styles.confirmationPage}>
      {Object.keys(order).length && <OrderConfirmation order={order} />}
    </div>
  );
}

export default ConfirmationPage;
