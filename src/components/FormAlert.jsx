import React from "react";
import styles from "./styles/OrderModal.module.css";

function FormAlert(props) {
  const { formAlert } = props;
  return (
    <div className={styles.modalAlert}>
      <h3>Incomplete form</h3>
      <p>
        Fields may not be empty, and phone numbers must be 10 digits. Please
        check the following fields:
      </p>
      <ul>
        {formAlert.map((fieldName) => (
          <li>
            <p>{fieldName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormAlert;
