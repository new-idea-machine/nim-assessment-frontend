import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation"

function ConfirmationPage() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [ order, setOrder ] = useState({})
  // const getOrder = () => (
  //   fetch(`/api/orders/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setOrder(data))
  // )

  const getOrder = async() => {
    try{
      const response = await fetch(`/api/orders/${id}`);
      const data = await response.json();
      setOrder(data);
    }
    catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    getOrder()
  }, [])

  return (
    <OrderConfirmation order={order}/>
  )
}

export default ConfirmationPage;