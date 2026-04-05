import { useState, useEffect } from 'react'

type Order = {
  id: number
  userId: number
  totalPrice: number
  deliveryAddress: string
  status: string
  createdAt: string
  items: { id: number; productId: number; quantity: number; price: number }[]
}

export function useAdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem('token')
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  const fetchOrders = async () => {
    const res = await fetch('http://localhost:3000/orders', { headers })
    const json = await res.json()
    setOrders(json.data)
    setLoading(false)
  }

  useEffect(() => { fetchOrders() }, [])

  const updateStatus = async (id: number, status: string) => {
    await fetch(`http://localhost:3000/orders/${id}/status`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ status }),
    })
    fetchOrders()
  }

  return { orders, loading, updateStatus }
}
