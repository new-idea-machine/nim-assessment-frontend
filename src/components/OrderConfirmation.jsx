function OrderConfirmation(props) {
  const { order } = props;

  return (
    <div className="order-confirmation">
      <h2>Thank you for your order!</h2>
      <section className="order-details">
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
