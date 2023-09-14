import { useEffect } from "react";
import { useParams } from "react-router";

function ConfirmationPage() {
  const { id } = useParams();

  const getOrder = async () => {
    const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return <div className="confirmation-page">CONFIRMATION PAGE {id}</div>;
}

export default ConfirmationPage;
