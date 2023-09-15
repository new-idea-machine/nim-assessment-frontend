import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation(props) {
  const { order } = props;
  console.log(order);

  return (
    <div className={styles.orderConfirmation}>
      <h2>Thank you for your order!</h2>
      <section className={styles.orderDetails}>
        <header>
          <p>
            {order.name}
            <br />
            {order.address}
          </p>
        </header>
        <hr />
        <div className={styles.itemList}>
          <h5>Order details:</h5>
          <ul>
            {order.items.map((itemObject) => {
              const { item } = itemObject;
              return <li key={item.id}>{item.name} x {itemObject.quantity}</li>;
            })}
          </ul>
        </div>
        <hr />
        <footer>
          <b>Order ID:</b> {order.id}
        </footer>
      </section>
    </div>
  );
}

export default OrderConfirmation;
