import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";
import { testOrder } from "../sampleTestData";

function ConfirmationPage() {
  const [setOrder] = useState({ items: [] });
  const [loading, setLoading] = useState(true);

  const { id } =
    useParams(); /* useParams is hooking the id value from the URL */

  const getOrders = async () => {
    /* check for the id before making the API request */

    try {
      if (id) {
        const response = await fetch(`/api/orders/${id}`);

        if (response.status === 200) {
          const data = await response.json();
          setOrder(data);
          window.location.href = `/order-confirmation/${data.id}`;
        }
      }
    } catch (error) {
      <p>{error}</p>;
    }
  };

  useEffect(() => {
    getOrders().then(() => {
      setLoading(false);
    }, [id]);
  });

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          <OrderConfirmation order={testOrder} />
        </ul>
      )}
    </div>
  );
}

export default ConfirmationPage;
