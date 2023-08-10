import React from "react";
import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation({ order }) {
  const { name, address, items, id } = order;

  const totalPrice = items.reduce(
    (total, { item, quantity }) => total + item.price * quantity,
    0
  );

  return (
    <div className={styles.OrderConfirmation}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h1>Thank you for your order</h1>
        </div>
        <div className={`${styles.section} ${styles["customer-info"]}`}>
          <div className={styles.label}>Customer&apos;s Name:</div>
          <div className={styles.value}>{name}</div>
          <div className={styles.label}>Address:</div>
          <div className={styles.value}>{address}</div>
          <div className={styles.label}>Order ID:</div>
          <div className={styles.value}>{id}</div>
        </div>
        <div className={`${styles.section} ${styles["ordered-items"]}`}>
          <h2>Items ordered</h2>
          <div className={styles.table}>
            {items.map(({ _id, item, quantity }) => (
              <div key={_id} className={styles["table-row"]}>
                <div className={styles["table-cell"]}>
                  <strong>Item Name:</strong> {item.name}
                </div>
                <div className={styles["table-cell"]}>
                  <strong>Qty:</strong> {quantity}
                </div>
                <div className={styles["table-cell"]}>
                  <strong>Price:</strong> ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.section} ${styles["order-total"]}`}>
          <div className={styles.label}>Order Total:</div>
          <div className={styles.value}>{`$${totalPrice.toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
