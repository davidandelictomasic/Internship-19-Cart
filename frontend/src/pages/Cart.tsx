import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import CartItemComponent from '../components/CartItem'
import DeliveryDateInfo from '../components/DeliveryDateInfo'
import { useCart } from '../hooks/useCart'

function Cart() {
  const navigate = useNavigate()
  const { items, removeItem, totalPrice } = useCart()

  return (
    <div className="pb-16 bg-white min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold text-center py-6">Košarica</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 mt-16 flex-1">Košarica je prazna.</p>
      ) : (
        <>
          <div className="px-4 text-xs text-gray-400 text-center mb-3">
            PROIZVODI NISU REZERVIRANI
          </div>

          <div className="px-4 mb-4">
            <DeliveryDateInfo />
          </div>

          <div className="px-4 flex flex-col gap-3 flex-1">
            {items.map((item, index) => (
              <CartItemComponent
                key={index}
                item={item}
                onRemove={() => removeItem(index)}
              />
            ))}
          </div>

          <div className="px-4 py-6 mt-auto">
            <div className="flex justify-between items-center mb-4">
              <p className="text-base">Ti plaćaš <span className="text-xs text-gray-400">s PDV-om</span></p>
              <p className="text-xl font-bold">{totalPrice.toFixed(2)} $</p>
            </div>
            <button
              onClick={() => navigate('/delivery')}
              className="w-full py-3 rounded-full text-white text-sm font-semibold"
              style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}
            >
              Nastavi na blagajnu
            </button>
          </div>
        </>
      )}

      <BottomNav />
    </div>
  )
}

export default Cart
