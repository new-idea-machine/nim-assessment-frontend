import React from "react";
import style from "./styles/Confirmation.module.css";

function OrderConfirmation({ order }) {
  return (
    <>
      <div>
        <div className={style.Confirmation}>
          <h3>Thank you for your order</h3>
          <div className={style.confirmationContent}>Order ID: {order.id}</div>
          <div className={style.confirmationContent}>Customer Name: {order.name}</div>
          <div className={style.confirmationContent}>Customer Address: {order.address}</div>
        </div>
      </div>
      <div>
        {order.items.map((item) => (
          <p key={item.id}>
            x{item.quantity}&nbsp;&nbsp;&nbsp;{item.item.name}
            &nbsp;&nbsp;&nbsp;${item.item.price}
          </p> ))}
      </div>
    </>
  );
}

export default OrderConfirmation;