import styles from "./styles/OrderConfirmation.module.css";

function OrderConfirmation ({ order }) {
  const {name, address, id, items} = order;

  return (
    <div className={styles.centertext}>
      <h1 className={styles.bouncytitle}>Thank you for your order.</h1>
      <br />
      <p>Order ID: {id}</p>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <br />
      <h2><u>Items</u></h2>
      <br />
      {
        items?.map((item) => (
          <div>
            <h4>{item.item.price}, {item.item.name}</h4>
          </div>
        ))
      }
    </div>
  );
};

export default OrderConfirmation;