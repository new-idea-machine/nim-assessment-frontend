import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/OrderModal.module.css";
import ErrStyles from "./styles/Error.module.css";

function OrderModal({ order, setOrderModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [addErr, setAddErr] = useState(false);

  const navigate = useNavigate();
  
  const placeOrder = async () => {
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
    if(response.status === 200) {
      navigate(`/order-confirmation/${data.id}`)
    }
  };

  const phoneValidation = (number) => {
    const comparison = /^\d{10}|[(),-]+$/;
    if (!comparison.test(number)) {
      return true
    }
    return false;
  }

  const fieldValidation = (n, p, a) => {
    if (!n) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (!p) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
    if(!a) {
      setAddErr(true);
    } else {
      setAddErr(false)
    }
    if (n && p && a) {
      setNameErr(false);
      setAddErr(false);
      if (phoneValidation(p)) {
        setPhoneErr(true);
      } else {
        setPhoneErr(false);
        placeOrder();
      }
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
        <form className={styles.form}>
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
            </label>
          </div>
        </form>


        {addErr && (
          <p className={ErrStyles.pulsetext}>
            Please enter your address.
          </p>
        )}

        {nameErr && (
          <p className={ErrStyles.pulsetext}>
            Please enter your name.
          </p>
        )}

        {phoneErr && (
          <p className={ErrStyles.pulsetext}>
            Please enter an appropriate phone number.
          </p>
        )}

        <br />

        <div className={styles.orderModalButtons}>
          <button
            className={styles.orderModalClose}
            onClick={() => setOrderModal(false)}
          >
            Close
          </button>
          <button
            onClick={() => {
                fieldValidation(name, phone, address)
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
