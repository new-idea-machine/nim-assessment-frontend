import { useEffect, useState } from "react";
import { useParams } from "react-router";

import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const getOrder = async () => {
    const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    setOrder({ ...data });
    console.log(data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="confirmation-page">
      <OrderConfirmation order={order} />
    </div>
  );
}

export default ConfirmationPage;
