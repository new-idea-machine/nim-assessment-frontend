import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const { id } = useParams();
  const [confirmationInfo, setConfirmationInfo] = useState(null);

  useEffect(() => {
    const fetchConfirmationInfo = async () => {
      try {
        const response = await fetch(`/api/orders/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        const data = await response.json();
        setConfirmationInfo(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchConfirmationInfo();
  }, [id]);

  return (
    <div>
      <h1>Confirmation Page</h1>
      {confirmationInfo && <OrderConfirmation order={confirmationInfo} key={confirmationInfo.id}/>}
    </div>
  );
}

export default ConfirmationPage;
