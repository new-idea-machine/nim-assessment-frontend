import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${id}`);
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        toast.error("Error fetching order");
      }
    };
    fetchOrder();
  }, [id]);

  return (
    <div className="container-xl pt-1">
      {order ? (
        <div>
          <OrderConfirmation order={order} />
        </div>
      ) : (
        <p>Loading order confirmation...</p>
      )}
    </div>
  );
}

export default ConfirmationPage;
