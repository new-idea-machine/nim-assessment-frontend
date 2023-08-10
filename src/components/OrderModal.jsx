import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles/OrderModal.module.css";

function OrderModal({ order, setOrderModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    setNameError(value ? "" : "Name is required");
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const digitalOnly = value.replace(/[^\d()-]/g, ""); // Remove non-numeric characters except ()-
    const formattedPhone = digitalOnly.replace(
      /^(\d{0,3})(\d{0,3})(\d{0,4})/,
      (_, first, middle, last) => {
        if (middle) {
          return `(${first}) ${middle}${last ? `-${last}` : ""}`;
        }
        return first;
      }
    );
    setPhone(formattedPhone);
    setPhoneError(formattedPhone ? "" : "Phone number is required");
  };

  const handleAddressChange = (e) => {
    const { value } = e.target;
    setAddress(value);
    setAddressError(value ? "" : "Address is required");
  };

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
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                  handleNameChange(e.target.value);
                }}
                type="text"
                id="name"
              />
              {nameError && (
                <div className={`${styles.error} error`}>{nameError}</div>
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
                  handlePhoneChange(e.target.value);
                }}
                type="phone"
                id="phone"
              />
              {phoneError && (
                <div className={`${styles.error} error`}>{phoneError}</div>
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
                  handleAddressChange(e.target.value);
                }}
                type="text"
                id="address"
              />
              {addressError && (
                <div className={`${styles.error} error`}>{addressError}</div>
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
          <button
            className={styles.orderModalPlaceOrder}
            onClick={() => {
              if (
                name &&
                phone &&
                address &&
                !nameError &&
                !phoneError &&
                !addressError
              ) {
                placeOrder();
              } else {
                toast.error(
                  "Please correctly fill all the fields before submitting."
                );
                setNameError(name ? "" : "Name is required");
                setPhoneError(phone ? "" : "Phone number is required");
                setAddressError(address ? "" : "Address is required");
              }
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
