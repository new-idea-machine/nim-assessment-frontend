import React, { useEffect, useState } from "react";
import OrderModal from "./OrderModal";
import styles from "./styles/Order.module.css";

function Order() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderModal, setOrderModal] = useState(false);

  const getItems = async () => {
    const response = await fetch("/api/menu");
    const data = await response.json();
    setMenuItems(data);
  };

  const addItemToOrder = (item) => {
    const newOrder = [...order];
    const itemInOrder = newOrder.find((orderItem) => orderItem.id === item.id);
    if (itemInOrder) {
      itemInOrder.quantity += 1;
    } else {
      newOrder.push({ ...item, quantity: 1 });
    }
    setOrder(newOrder);
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
          <div>
            <h2>Menu</h2>
          </div>
          <div className={styles.menu}>
            {menuItems.map((item) => (
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>

                <button
                  className="small-button"
                  onClick={() => {
                    addItemToOrder(item);
                  }}
                >
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>
        {order.length > 0 && (
          <div className={styles.subContainer}>
            <div>
              <h2>Your Order</h2>
            </div>
            <div className={styles.order}>
              <ul>
                {order.map((item) => (
                  <li key={item.id}>
                    <div className={styles.item}>
                      <p>{item.name}</p>
                      <div className={styles.quantity}>
                        <p>${item.price}</p>
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
                    (total, item) => total + item.price * item.quantity,
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
        )}
      </div>
    </div>
  );
}

export default Order;
