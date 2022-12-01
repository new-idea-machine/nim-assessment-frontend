import React from "react";
import styles from "./styles/Order.module.css";

function Order({ order, setOrderModal }) {
  return (
    <div className={styles.subContainer}>
      <div>
        <h2>Your Order</h2>
      </div>
      <div className={styles.order}>
        <ul>
          {order.map((item) => (
            <li key={item.item.id}>
              <div className={styles.item}>
                <p>{item.item.name}</p>
                <div className={styles.quantity}>
                  <p>${item.item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <h3>
          Total: $
          {(
            order.reduce(
              (total, item) => total + item.item.price * item.quantity,
              0
            ) * 1.05
          ).toFixed(2)}
        </h3>
        <button
          className="small-button"
          onClick={() => {
            setOrderModal(true);
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Order;
