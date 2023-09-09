

function ConfirmationPage( { id, order} ){

        const getDatabyId = () => {
            const orderActualizadas = order.map( item => {
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
            console.log(orderActualizadas);
            
        }

    return (        
        <div>
                <h1>Probando nuevo componente de Confirmacions</h1>
                <h2>Aqui se desplegara la orden basada en su id</h2>

                <button onClick={getDatabyId(id)}> Confirmar Orden </button>
              
        </div>
    );
   

}
 
export default ConfirmationPage;
