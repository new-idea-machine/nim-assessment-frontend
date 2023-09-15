import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation(props) {
  const { order } = props;

  return (
    <div className="order-confirmation">
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
        <h5>Order details:</h5>
        <ul>
          {order.items.map((itemObject) => {
            const { item } = itemObject;
            return <li>{item.name}</li>;
          })}
        </ul>
        <hr />
        <footer>
          <b>Order ID:</b> {order.id}
        </footer>
      </section>
    </div>
  );
}

export default OrderConfirmation;
