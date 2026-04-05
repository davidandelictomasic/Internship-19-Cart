import { Navigate } from 'react-router-dom'

function AdminRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token')
  if (!token) return <Navigate to="/login" replace />

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    if (payload.role !== 'ADMIN') return <Navigate to="/home" replace />
  } catch {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default AdminRoute
