import React from "react";
import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation({ order }) {
  return (
    <div>
      {order && (
        <div className={styles.ordermain}>
          <h3 className={styles.title}>Thank you for your order!</h3>
          <div className={styles.orderdetails}>
            <div className={styles.header}>
              <p>Name:</p>
              <p>Address:</p>
              <p>Name:</p>
              <p>Order ID:</p>
            </div>
            <div className={styles.units}>
              <p>{order.name}</p>
              <p> {order.address}</p>{" "}
              {order.items.map((item) => (
                <p key={item.item.id}>Meal: {item.item.name}</p>
              ))}
              <p>{order.id}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
