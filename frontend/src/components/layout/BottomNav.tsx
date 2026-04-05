import { useLocation, useNavigate } from 'react-router-dom'
import homeIcon from '../../assets/bottom-navbar/home.png'
import searchIcon from '../../assets/bottom-navbar/search.png'
import favoriteIcon from '../../assets/bottom-navbar/favorite.png'
import cartIcon from '../../assets/bottom-navbar/cart.png'
import profileIcon from '../../assets/bottom-navbar/profile.png'

const navItems = [
  { icon: homeIcon, label: 'Home', path: '/home' },
  { icon: searchIcon, label: 'Search', path: '/search' },
  { icon: favoriteIcon, label: 'Favorites', path: '/favorites' },
  { icon: cartIcon, label: 'Cart', path: '/cart' },
  { icon: profileIcon, label: 'Profile', path: '/profile' },
]

function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === item.path ? 'opacity-100 scale-110' : 'opacity-30'
          }`}
        >
          <img src={item.icon} alt={item.label} className="w-6 h-6" />
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
