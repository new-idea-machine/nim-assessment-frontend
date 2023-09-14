import React from "react";
import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation({ order }) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>Thank you for your order!</h1>
      </div>
      <div className={styles.customerInfo}>
        <p>Order ID: {order.id}</p>
        <p>Customer Name: {order.name}</p>
        <p>Customer Address: {order.address}</p>
      </div>
      <div className={styles.orderedItems}>
        <p>Items Ordered:</p>
        <hr />
        <ul className={styles.itemList}>
          {order.items.map((item) => (
            <li key={item.id}>
              {item.item.name} x{item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderConfirmation;
