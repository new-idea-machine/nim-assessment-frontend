import React from "react";
// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Confirmation.module.css";

function OrderConfirmation({ order }) {
  // const navigate = useNavigate();
  // const handlePrint = () => {
  //   window.print();
  // };
  // const handleBackToMain = () => {
  //   navigate("/");
  // };
  return (
    <div className={`order-confirmation ${styles.confirmation}`}>
      <div className="container-xl pt-1 text-center ">
        <h1 className="fw-bold">Order Confirmation</h1>
        <h3 className="mb-5 fw-bold">
          Thank you for your order, {order.name}!
        </h3>
        <p>Your order ID is: {order.id}</p>
        <p>Delivery Address: {order.address}</p>
        <p>You have ordered:</p>
        <ul>
          {order.items.map((item) => (
            <li key={item.item.id} className="list-group">
              {item.item.name} * {item.quantity}
            </li>
          ))}
        </ul>
        {/* <div className="mt-5">
          <button className="mx-3" onClick={handlePrint}>
            Print
          </button>
          <button className="mx-3" onClick={handleBackToMain}>
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default OrderConfirmation;
