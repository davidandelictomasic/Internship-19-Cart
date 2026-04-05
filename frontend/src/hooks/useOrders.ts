import { useState } from 'react'

type OrderItem = {
  productId: number
  quantity: number
  price: number
}

type CreateOrderData = {
  deliveryAddress: string
  items: OrderItem[]
}

export function useOrders() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createOrder = async (data: CreateOrderData) => {
    setLoading(true)
    setError(null)
    const token = localStorage.getItem('token')
    try {
      const res = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Failed to create order')
      return json.data
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { createOrder, loading, error }
}
