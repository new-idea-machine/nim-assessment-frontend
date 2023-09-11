import React, {useEffect} from "react";
import Swal from "sweetalert2";

function OrderConfirmation({ infoOrderById }){

        useEffect(() => {
            if (infoOrderById) {
              Swal.fire(
                `Thank you for your order! ${infoOrderById.name}`,
                "Please confirm this order on this page",
                "success"
              );
            }
          }, [infoOrderById]);
        
    return (
       
          <div className="container"> 
            <div>  
                <h3 className="text-center mb-5"> Order Confirmation </h3>
            </div>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Items</th>
                        <th>Order Id</th>

                    </tr>
                </thead>
                <tbody>     
                     <tr>
                        <td> Name: {infoOrderById.name}</td>    
                        <td>Address: {infoOrderById.address}</td>
                        <td>Phone: {infoOrderById.phone}</td>
                        <td> Items:           
                            {/* <ul> */}
                            {infoOrderById && infoOrderById.items.map((item) => (
                                <li key={item.item.id}>
                                    {item.item.name} {item.quantity}
                                </li>
                            ))} 
                            {/* </ul>     */}
                        </td>   
                        <td>Order id : {infoOrderById.id}</td>
                     </tr>                            
                </tbody>
               </table>
            </div>                    
    );

}
 
export default OrderConfirmation;