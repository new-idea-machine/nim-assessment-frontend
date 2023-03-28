import React from "react";
import "./styles/OrderConfirmation.css";

function OrderConfirmation({ order }) {
  const { name, address, items, id } = order;

  const totalPrice = items.reduce(
    (total, { item, quantity }) => total + item.price * quantity,
    0
  );

  return (
    <div className="OrderConfirmation">
      <div className="content">
        <div className="section">
          <h1>Thank you for your order</h1>
        </div>
        <div className="section customer-info">
          <table>
            <tbody>
              <tr>
                <td className="label">Customer&apos;s Name:</td>
                <td className="value">{name}</td>
              </tr>
              <tr>
                <td className="label">Address:</td>
                <td className="value">{address}</td>
              </tr>
              <tr>
                <td className="label">Order ID:</td>
                <td className="value">{id}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="section ordered-items">
          <h2>Items ordered</h2>
          <table>
            <thead>
              <tr>
                <th className="item-name">Item Name</th>
                <th className="qty">Qty</th>
                <th className="price">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ _id, item, quantity }, index) => (
                <tr key={_id}>
                  <td className="item-name">
                    {index + 1}. {item.name}
                  </td>
                  <td className="qty">{quantity}</td>
                  <td className="price">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="section order-total">
          <table>
            <tbody>
              <tr>
                <td className="label">Order Total:</td>
                <td className="value">${totalPrice.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
