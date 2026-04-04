import { useState, useEffect } from 'react'
import type { Product } from './useProducts'

export type Favorite = {
  id: number
  userId: number
  productId: number
  product: Product
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoading(false)
      return
    }

    const fetchFavorites = async () => {
      try {
        const res = await fetch('http://localhost:3000/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        })
        const json = await res.json()
        if (!res.ok) throw new Error(json.message || 'Failed to fetch favorites')
        setFavorites(json.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFavorites()
  }, [])

  return { favorites, loading, error }
}
