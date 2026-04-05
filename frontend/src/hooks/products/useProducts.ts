import { useState, useEffect } from 'react'

export type Product = {
  id: number
  name: string
  description: string | null
  price: number
  brand: string | null
  sizes: string[]
  colors: string[]
  posterUrls: string[]
  isAvailable: boolean
  categoryId: number
  category: {
    id: number
    name: string
  }
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3000/products')
        const json = await res.json()
        setProducts(json.data?.products || json.data || [])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return { products, loading, error }
}
