import { useState, useEffect } from 'react'

type Product = {
  id: number
  name: string
  description: string | null
  price: number
  brand: string | null
  sizes: string[]
  colors: string[]
  posterUrls: string[]
  isAvailable: boolean
  categoryId: number | null
  category: { id: number; name: string } | null
}

export function useAdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem('token')
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  const fetchProducts = async () => {
    const res = await fetch('http://18.198.55.139:3000/products')
    const json = await res.json()
    setProducts(json.data.products)
    setLoading(false)
  }

  useEffect(() => { fetchProducts() }, [])

  const createProduct = async (data: any) => {
    await fetch('http://18.198.55.139:3000/products', { method: 'POST', headers, body: JSON.stringify(data) })
    fetchProducts()
  }

  const updateProduct = async (id: number, data: any) => {
    await fetch(`http://18.198.55.139:3000/products/${id}`, { method: 'PUT', headers, body: JSON.stringify(data) })
    fetchProducts()
  }

  const deleteProduct = async (id: number) => {
    await fetch(`http://18.198.55.139:3000/products/${id}`, { method: 'DELETE', headers })
    fetchProducts()
  }

  return { products, loading, createProduct, updateProduct, deleteProduct }
}
