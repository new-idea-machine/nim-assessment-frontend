
function ConfirmationPage( { id, order, name, phone, address } ){
        const getDatabyId = () => {
            const orderUpdated = order.map( item => {
                if(item.id === id){
                    return {
                      ...item,  
                      name,
                      phone,
                      address,
                     status: "Confirmado"
                    }
                }
                 return {
                //     // id: item.id,
                //     // name: item.name,
                //     // price: item.price,
                //     // quantity: item.quantity,
                      status: item.status
                 }
               
        })           
            console.log("This is the data from this variable " , orderUpdated);          
 }    

    return (          
        <>
            <h1>Confirming Order</h1>
            <h2>Order Id: ${id}</h2>    
            <button onClick={getDatabyId}>Confirm Order</button>
        </>
    ); 
}
 
export default ConfirmationPage;
