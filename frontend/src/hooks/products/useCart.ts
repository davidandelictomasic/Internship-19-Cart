import { useState, useEffect } from 'react'

export type CartItem = {
  productId: number
  name: string
  brand: string | null
  category: string
  price: number
  posterUrl: string
  selectedSize: string
  selectedColor: string
}

function getCartFromStorage(): CartItem[] {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(getCartFromStorage)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems(prev => [...prev, item])
  }

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

  return { items, addItem, removeItem, clearCart, totalPrice }
}
