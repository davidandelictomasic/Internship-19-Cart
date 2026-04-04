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

  const addFavorite = async (productId: number) => {
    const token = localStorage.getItem('token')
    try {
      const res = await fetch(`http://localhost:3000/favorites/${productId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Failed to add favorite')
      setFavorites(prev => [...prev, json.data])
      return json.data
    } catch (err: any) {
      setError(err.message)
      return null
    }
  }

  const removeFavorite = async (productId: number) => {
    const token = localStorage.getItem('token')
    try {
      const res = await fetch(`http://localhost:3000/favorites/${productId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Failed to remove favorite')
      setFavorites(prev => prev.filter(f => f.productId !== productId))
      return true
    } catch (err: any) {
      setError(err.message)
      return false
    }
  }

  const isFavorite = (productId: number) => {
    return favorites.some(f => f.productId === productId)
  }

  const toggleFavorite = (productId: number) => {
    if (isFavorite(productId)) {
      removeFavorite(productId)
    } else {
      addFavorite(productId)
    }
  }

  return { favorites, loading, error, addFavorite, removeFavorite, isFavorite, toggleFavorite }
}
