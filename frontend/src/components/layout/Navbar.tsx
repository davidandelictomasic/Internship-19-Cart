import cartLogo from '../../assets/welcome_animation/cart logo.png'
import brandName from '../../assets/welcome_animation/brand name.png'
import notificationDefault from '../../assets/notification/default.png'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <img src={cartLogo} alt="Cart logo" className="w-8 h-8" />
        <img src={brandName} alt="CART" className="h-6" />
      </div>
      <img src={notificationDefault} alt="Notifications" className="w-7 h-7" />
    </nav>
  )
}

export default Navbar
