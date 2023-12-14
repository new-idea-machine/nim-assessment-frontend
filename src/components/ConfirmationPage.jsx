import React, { useEffect, useState }from "react";
import { useParams } from "react-router";
import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const [ order, setOrder ] = useState(null);
  const { id } = useParams();
  
  const getOrder = async() => {
    const response = await fetch(`http://localhost:3001/api/orders/${id}`);
    const data = await response.json();
    setOrder(data);
  };

  useEffect(()=>{
    getOrder();
  }, [id]);

  return (
    <div>
      {order ? <OrderConfirmation order={order} /> : <p>Loading...</p>}
    </div>
  );
}

export default ConfirmationPage;
