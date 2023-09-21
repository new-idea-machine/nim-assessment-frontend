function OrderConfirmation({ order }) {

    return (
        <section>
            <h1>Thank you for your order</h1>
            <div className="order_details">
                <h3>Order ID: </h3>
                <p>{order.id}</p>
            </div>
            <div className="order_details">
                <h3>Customer: </h3>
                <p>{order.name}</p>
            </div>
            <div className="order_details">
                <h3>Address: </h3>
                <p>{order.addrerss}</p>
            </div>
            <div className="order_details">
                <h3>Items: </h3>
                <ul>
                {order.items.map((item, index) => (
                    <li key={index}>{item.name} x {item.quantity}</li>
                ))}

                </ul>
            </div>
        </section>
    )
}

export default OrderConfirmation