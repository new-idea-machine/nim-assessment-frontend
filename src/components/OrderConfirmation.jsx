
import React from "react";


function OrderConfirmation({ infoOrderById }){
    return (
        <> 
            <h1>Bienvenido a la pagina Order Confirmation</h1>

            Name: {infoOrderById.name};
            <br />
            Address: {infoOrderById.address};
            <br />
            Phone: {infoOrderById.phone};
            <br />
            Items:
            <ul>
                  {infoOrderById && infoOrderById.items.map((item) => (
                    <li key={item.item.id}>
                        Name : {item.item.name} Quantity : {item.quantity}
                    </li>
                ))}
             </ul>     
            {/* //Items: {infoOrderById.items}; */}
            Order id : {infoOrderById.id};
            <br />
            
       </>
    );


}
 
export default OrderConfirmation;