

function ConfirmationPage( { id, order} ){

        const getDatabyId = () => {
            const orderUpdated = order.map( item => {
                if(item.id === id){
                    return {
                      ...item,  
                        status: "Confirmado"
                    }
                }
                // return item
                return {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                }
            })
            console.log(orderUpdated);
            
        }

    return (        
        <div>
                <h1>Testing New Component Confirmacions</h1>
                <h2>The order by ID</h2>

                <button onClick={getDatabyId(id)}> Confirm Order </button>
              
        </div>
    );
   

}
 
export default ConfirmationPage;
