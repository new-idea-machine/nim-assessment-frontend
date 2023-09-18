import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const [orderInfo, setOrderInfo ] = useState({});
  const { id } = useParams();

  const getOrder = async () => {
    const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    setOrderInfo(data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <OrderConfirmation order={orderInfo} />
  );
}

export default ConfirmationPage;