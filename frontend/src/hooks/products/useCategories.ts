import { useState, useEffect } from 'react'

type Category = {
  id: number
  name: string
  products?: any[]
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      const res = await fetch('http://18.198.55.139:3000/categories')
      const json = await res.json()
      setCategories(json.data)
    } catch {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchCategories() }, [])

  return { categories, loading, refetch: fetchCategories }
}
