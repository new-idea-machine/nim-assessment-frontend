
import React from "react";


function ConfirmationPage( { order } ) {

  

    console.log("Esta es la data order que recibe el componente ConfirmationPage" , order);

    return (
        <> 
            <h1>Confirmation Page</h1>

            <h2>Order Details</h2>

       </>
    );

}
 
export default ConfirmationPage;