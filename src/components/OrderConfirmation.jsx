import { React } from "react";
import styles from "./styles/Order.module.css";

function OrderConfirmation(props) {
  const { order } = props;
  return (
    <>
      <div>
        <h2>Thank you for your order!</h2>
      </div>
      <div>
        <h3>Name</h3>
        <div>{order.name}</div>
      </div>
      <div>
        <h3>Address</h3>
        <div>{order.address}</div>
      </div>
      <div>
        <h3>Order ID</h3>
        <div>{order.id}</div>
      </div>
      <div>
        <ul className={styles.order}>
          {order.items.map((item) => (
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
            order.items.reduce(
              (total, item) => total + item.item.price * item.quantity,
              0
            ) * 1.05
          ).toFixed(2)}
        </h3>
      </div>
    </>
  );
}

export default OrderConfirmation;
