import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Search from './pages/Search'
import ProductDetail from './pages/ProductDetail'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import DeliveryInfo from './pages/DeliveryInfo'
import AdminDashboard from './pages/admin/AdminDashboard'
import PrivateRoute from './components/PrivateRoute'
import CartRoute from './components/CartRoute'
import AdminRoute from './components/AdminRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      <Route path="/delivery" element={<CartRoute><DeliveryInfo /></CartRoute>} />
      <Route path="/checkout" element={<CartRoute><Checkout /></CartRoute>} />
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
    </Routes>
  )
}

export default App
