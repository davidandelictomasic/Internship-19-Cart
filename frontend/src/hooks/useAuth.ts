import { useState } from 'react'

type RegisterData = {
  email: string
  password: string
  name?: string
  address?: string
}

export function useAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const register = async (data: RegisterData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Registration failed')
      localStorage.setItem('token', json.data.accessToken)
      return json.data
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  const login = async (data: { email: string; password: string }) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Login failed')
      localStorage.setItem('token', json.data.accessToken)
      return json.data
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { register, login, loading, error }
}
