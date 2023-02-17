import styles from "./styles/Confirmation.module.css"

export default function OrderConfirmation({ order }) {
  const { _id, name, address, items } = order
  // console.log(_id, name, address, phone, items)

  const displayItems =
    items.map(item =>
      <li className={styles.itemList} key={item.item.id}>
        <p>{item.item.name}</p>
        <p>{item.quantity}</p>
        <p>$ {item.item.price}</p>
      </li>)

  const totalOrder = items.reduce(
    (total, item) => total + item.item.price * item.quantity, 0) * 1.05

  return (
    <div className={styles.orderConfirmation}>
      <div className={styles.customerInfo}>
        <p>Thank you for your order {name}!</p>
        <p>Order ID: {_id}</p>
        <p>Address: {address}</p>
      </div>

      <ul className={styles.itemListContainer}>
        <li className={styles.itemList}>
          <p className={styles.itemTitle}>Item(s)</p>
          <p className={styles.itemTitle}>Quantity</p>
          <p className={styles.itemTitle}>Unit Price</p>
        </li>

        {displayItems}
      </ul>
      <p>Total Order: $ {totalOrder.toFixed(2)}</p>
    </div >)
}
