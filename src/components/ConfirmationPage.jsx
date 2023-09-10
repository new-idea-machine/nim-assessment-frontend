
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ConfirmationPage(){

    const [ infoOrderById, setInfoOrderById] = useState("");
    const { id } = useParams();

    useEffect( () => {
    const getOrderById = async () => {
        try {
          const response = await fetch(`/api/orders/${id}`);
          const data = await response.json();
          setInfoOrderById(data);
        } catch (error) {
          console.log("Error getting info-order");
        }
    };
    getOrderById();
    }, []);

    console.log("Esta es la data order que recibe el componente ConfirmationPage" , infoOrderById);

    return (
        <> 
            <h1>Confirmation Page</h1>

            <h2>Order Details</h2>
       </>
    );
}
 
export default ConfirmationPage;