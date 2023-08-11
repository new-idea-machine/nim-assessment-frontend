import React, { useEffect, useState } from "react";
import ConfirmationPage from "./ConfirmationPage";
import Menu from "./Menu";
import Order from "./Order";
import OrderModal from "./OrderModal";

import styles from "./styles/Order.module.css";

function Main() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderModal, setOrderModal] = useState(false);

  const getItems = async () => {
    const response = await fetch("/api/menu");
    const data = await response.json();
    setMenuItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="page">
      {orderModal && <OrderModal order={order} setOrderModal={setOrderModal} />}
      <h1>Create an order</h1>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Menu menuItems={menuItems} order={order} setOrder={setOrder} />
        </div>
        {order.length > 0 && (
          <Order order={order} setOrderModal={setOrderModal} />
        )}
      </div>
      <ConfirmationPage order={order} />
    </div>
  );
}

export default Main;
