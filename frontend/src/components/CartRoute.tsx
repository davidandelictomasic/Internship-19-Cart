import { Navigate } from 'react-router-dom'

function CartRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token')
  const cart = localStorage.getItem('cart')
  const items = cart ? JSON.parse(cart) : []

  if (!token) return <Navigate to="/login" replace />
  if (items.length === 0) return <Navigate to="/cart" replace />

  return <>{children}</>
}

export default CartRoute
