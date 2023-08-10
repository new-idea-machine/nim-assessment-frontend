import React, { useState } from "react";
import styles from "./styles/OrderModal.module.css";

function OrderModal({ order, setOrderModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const placeOrder = async () => {
    const response = await fetch("http://localhost:3001/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        items: order
      })
    });
    const data = await response.json();
    if (response.status === 200) {
      window.location.href = `/order-confirmation/${data.id}`;
    }
  };

  function validateForm() {
    let isValid = true;
    const errors = {};

    if (!name) {
      errors.name = "Name must be filled out";
      isValid = false;
    }

    const phoneRegex = /^\(?(\d{3})\)?[- ]?\d{3}[- ]?\d{4}$/;
    if (!phone || !phone.match(phoneRegex)) {
      errors.phone = "Invalid phone number";
      isValid = false;
    }

    if (!address) {
      errors.address = "Address must be filled out";
      isValid = false;
    }

    setErrorMessages(errors);

    if (isValid) {
      placeOrder();
    }
  }

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
        <form className={styles.form} onSubmit={validateForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                type="text"
                id="name"
              />
              {errorMessages.name && (
                <span className={styles.errorMessage}>
                  {errorMessages.name}
                </span>
              )}
            </label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">
              Phone
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setPhone(e.target.value);
                }}
                type="phone"
                id="phone"
              />
              {errorMessages.phone && (
                <span className={styles.errorMessage}>
                  {errorMessages.phone}
                </span>
              )}
            </label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">
              Address
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                }}
                type="phone"
                id="address"
              />
              {errorMessages.address && (
                <span className={styles.errorMessage}>
                  {errorMessages.address}
                </span>
              )}
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
          <button onClick={validateForm}>Place Order</button>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
