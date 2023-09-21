function ConfirmationPage({ id }) {
    const getOrders = async ()  => {
        const response = await fetch(`/api/orders/${id}`)
        const orders = await response.json()
    }
    return (<></>)
}

export default ConfirmationPage 