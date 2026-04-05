import { useState, useEffect } from 'react'

type Category = {
  id: number
  name: string
  products?: any[]
}

export function useAdminCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem('token')
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  const fetchCategories = async () => {
    const res = await fetch('http://localhost:3000/categories')
    const json = await res.json()
    setCategories(json.data)
    setLoading(false)
  }

  useEffect(() => { fetchCategories() }, [])

  const createCategory = async (name: string) => {
    await fetch('http://localhost:3000/categories', { method: 'POST', headers, body: JSON.stringify({ name }) })
    fetchCategories()
  }

  const deleteCategory = async (id: number) => {
    await fetch(`http://localhost:3000/categories/${id}`, { method: 'DELETE', headers })
    fetchCategories()
  }

  return { categories, loading, createCategory, deleteCategory }
}
