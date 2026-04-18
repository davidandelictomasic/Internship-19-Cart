import { useState } from 'react'

type UpdateUserData = {
  name?: string
  address?: string
}

export function useUpdateUser() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateUser = async (data: UpdateUserData) => {
    setLoading(true)
    setError(null)
    const token = localStorage.getItem('token')
    try {
      const res = await fetch('http://18.198.55.139:3000/users/me', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Failed to update user')
      return json.data
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { updateUser, loading, error }
}
