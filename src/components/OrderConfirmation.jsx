import React from "react";
import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation({ order }) {
  const { name, address, items, id } = order;
  return (
    <div className={styles["order-confirmation"]}>
      <div className={styles["order-header"]}>
        <div className={styles["order-subheader"]}>
          <h2>Order #{id}</h2>
          <p>Thank you for your order {name}</p>
        </div>
      </div>
      <div className={styles["order-customer"]}>
        <h2>Customer Information</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
      <div className={styles["order-items"]}>
        <h2>Your Order</h2>
        <ul className={styles["item-list"]}>
          {items.map((item) => (
            <li key={`${item.id}-${Math.random()}`} className={styles.item}>
              <p>
                <strong>Item:</strong> {item.item.name}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Price:</strong> ${item.item.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderConfirmation;
