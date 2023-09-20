import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/OrderModal.module.css";
import FormAlert from "./FormAlert";
import { formatPhone, checkUnfilled } from "../helpers/validateForm";

function OrderModal({ order, setOrderModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [formAlert, setFormAlert] = useState([]);
  const navigate = useNavigate();

  const placeOrder = async () => {
    const fields = {
      Name: name,
      Phone: phone,
      Address: address
    };
    const alerts = [];
    const emptyFields = checkUnfilled(fields);
    const formattedPhone = formatPhone(phone);
    emptyFields.forEach((fieldName) => alerts.push(fieldName));
    if (!formattedPhone && !alerts.includes("Phone")) {
      alerts.push("Phone");
    }
    if (alerts.length > 0) {
      setFormAlert(alerts);
      return null;
    }
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone: formattedPhone,
        address,
        items: order
      })
    });
    const data = await response.json();
    return response.status === 200
      ? navigate(`/order-confirmation/${data.id}`)
      : response.status;
  };
  return (
    <>
      <div
        label="Close"
        className={styles.orderModal}
        onKeyPress={(e) => {
          if (e.key === "Escape") {
            setOrderModal(false);
          }
        }}
        onClick={() => setOrderModal(false)}
        role="menuitem"
        tabIndex={0}
      />
      <div className={styles.orderModalContent}>
        <h2>Place Order</h2>
        {formAlert.length > 0 && <FormAlert formAlert={formAlert} />}
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name
              <input
                className={`${formAlert.includes("Name") ? styles.error : ""}`}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                type="text"
                id="name"
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">
              Phone
              <input
                className={`${formAlert.includes("Phone") ? styles.error : ""}`}
                onChange={(e) => {
                  e.preventDefault();
                  setPhone(e.target.value);
                }}
                type="phone"
                id="phone"
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">
              Address
              <input
                className={`${
                  formAlert.includes("Address") ? styles.error : ""
                }`}
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                }}
                type="phone"
                id="address"
              />
            </label>
          </div>
        </form>

        <div className={styles.orderModalButtons}>
          <button
            className={styles.orderModalClose}
            onClick={() => setOrderModal(false)}
          >
            Close
          </button>
          <button
            onClick={() => {
              placeOrder();
            }}
            className={styles.orderModalPlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
