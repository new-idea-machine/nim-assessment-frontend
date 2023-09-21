import React, { useState, useEffect } from "react"
import OrderConfirmation from "./OrderConfirmation"

function ConfirmationPage({ id }) {
    const [orders, setOrders] = useState([])
    const getOrders = async ()  => {
        const response = await fetch(`/api/orders/${id}`)
        const data = await response.json()
        setOrders(data)
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <OrderConfirmation orders={orders} />
    )
}

export default ConfirmationPage 