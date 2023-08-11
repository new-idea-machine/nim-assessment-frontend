import React, { useState, useEffect } from "react";
import styles from "./styles/OrderModal.module.css";

function OrderModal({ order, setOrderModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [name, phone, address]);

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!phone) {
      newErrors.phone = "Phone is required";
    } else {
      const numericPhone = phone.replace(/[^\d]/g, "");

      if (numericPhone.length !== 10) {
        newErrors.phone = "Invalid phone number";
      }
    }

    if (!address) {
      newErrors.address = "Address is required";
    }

    return newErrors;
  };

  const placeOrder = async () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const response = await fetch("/api/orders", {
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
    console.log(data);
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
        {Object.keys(errors).length > 0 && (
          <div className="errors" data-testid="errors">
            {Object.values(errors).map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>
        )}
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name
              <input
                value={name}
                aria-label="User Name"
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                  setErrors({});
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
                value={phone}
                aria-label="User Phone"
                onChange={(e) => {
                  e.preventDefault();
                  setPhone(e.target.value);
                  setErrors({});
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
                value={address}
                aria-label="User Address"
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                  setErrors({});
                }}
                type="text"
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
