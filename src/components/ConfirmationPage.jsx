import styles from "./styles/Order.module.css";

function ConfirmationPage( { id, order, name, phone, address } ){
        const getDatabyId = () => {
            const orderUpdated = order.map( item => {
                if(item.id === id){
                    return {
                      ...item,  
                      name,
                      phone,
                      address,
                     status: "Confirmado",                  
                    }
                }
                 return {
                      status: item.status
                 }
           })           
            console.log("This is the data from this variable " , orderUpdated);          
        };    

    return (    

    <div className={styles.subContainer}>
      <div>
        <h2>Your Order</h2>
      </div>
      <div> 
                <p>${name}</p>
                <p>${phone}</p>
                <p>${address}</p>
                <hr />
        </div>
      <div className={styles.order}>
        <ul>
          {order.map((item) => (
            <li key={item.item.id}>
              <div className={styles.item}>
                <p>{item.item.name}</p>
                <div className={styles.quantity}>
                  <p>${item.item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </li>        
          ))}
        </ul>
        <h3>
          Total: $
          {(
            order.reduce(
              (total, item) => total + item.item.price * item.quantity,
              0
            ) * 1.05
          ).toFixed(2)}
        </h3>
        <button onClick={() => {
               getDatabyId();
         // setConfirmOrder(true);
               }} >
                Confirm Order
        </button>
    
    </div>

</div> 

    ); 
}
export default ConfirmationPage;
