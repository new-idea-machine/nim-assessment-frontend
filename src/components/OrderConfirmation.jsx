function OrderConfirmation({ order }) {
  return (
    <section>
      <h1>Thank you for your order</h1>

      <p>
        <strong>Order ID:</strong> {order.id}
      </p>

      <p>
        <strong>Customer:</strong> {order.name}
      </p>

      <p>
        <strong>Address:</strong> {order.address}
      </p>

      <h3>Items: </h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.item.id}>
            {item.item.name} x {item.quantity}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OrderConfirmation;
