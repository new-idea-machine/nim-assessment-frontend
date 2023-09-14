import React from "react";
import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation({ order }) {
  let items = [];
  let cost = 0;

  if (order.items) {
    items = order.items.map((dish) => (
      <li key={dish.item.id} className={styles.dishItem}>
        <p>{dish.item.name}</p>
        <p>{dish.item.description}</p>
        <p>{dish.quantity}</p>
        <p>{dish.item.price}</p>
      </li>
    ));

    cost =
      order.items.reduce(
        (total, item) => total + item.item.price * item.quantity,
        0
      ) * 1.05;
  }

  return (
    <div className={styles.container}>
      <div className={styles.outline}>
        <h2>Thank you for your order</h2>
        <h3>Here are the details:</h3>
        <ul className={styles.dishList}>
          <li className={styles.dishHeader}>
            <p>Dish</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
          </li>
          {items}
        </ul>
        <p className={styles.total}>
          Total (inc taxes):&nbsp;&nbsp;&nbsp;$ {cost.toFixed(2)}
        </p>
        <section className={styles.customer}>
          <p>Deliver to:</p>
          <p>{order.name}</p>
          <p>{order.address}</p>
          <br />
          <p>Order ID: {order.id}</p>
        </section>
      </div>
    </div>
  );
}

export default OrderConfirmation;
