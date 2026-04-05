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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/delivery" element={<DeliveryInfo />} />
    </Routes>
  )
}

export default App
