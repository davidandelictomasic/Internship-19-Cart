import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import PaymentMethod from '../components/PaymentMethod'
import CartItemComponent from '../components/CartItem'
import DeliveryDateInfo from '../components/DeliveryDateInfo'
import { useCart } from '../hooks/useCart'
import { useOrders } from '../hooks/useOrders'
import OrderSuccess from '../components/OrderSuccess'
import OrderError from '../components/OrderError'

function Checkout() {
  const navigate = useNavigate()
  const { items, totalPrice, clearCart, removeItem } = useCart()
  const { createOrder, loading: submitting } = useOrders()
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderStatus, setOrderStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const deliveryAddress = localStorage.getItem('deliveryAddress') || ''

  const handleConfirm = async () => {
    if (!paymentMethod || !deliveryAddress) return
    const result = await createOrder({
      deliveryAddress,
      items: items.map(item => ({
        productId: item.productId,
        quantity: 1,
        price: item.price,
      })),
    })
    if (result) {
      clearCart()
      localStorage.removeItem('deliveryAddress')
      localStorage.removeItem('billingAddress')
      setOrderStatus('success')
    } else {
      setOrderStatus('error')
    }
  }

  if (orderStatus === 'success') {
    return <OrderSuccess onClose={() => navigate('/home')} />
  }

  if (orderStatus === 'error') {
    return <OrderError onClose={() => setOrderStatus('idle')} />
  }

  if (items.length === 0) {
    return (
      <div className="pb-16 bg-white min-h-screen">
        <Navbar />
        <p className="text-center mt-16 text-gray-400">Košarica je prazna.</p>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="pb-16 bg-white min-h-screen">
      <Navbar />

      <div className="px-4 mt-4 flex flex-col gap-4">

        <DeliveryDateInfo />
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm font-bold">Dostava na:</p>
          <p className="text-sm text-gray-500 mt-1">{deliveryAddress}</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-bold">Moja košarica</p>
            <span className="text-xs text-gray-400">{items.length} stavki</span>
          </div>
          <div className="flex flex-col gap-3">
            {items.map((item, index) => (
              <CartItemComponent
                key={index}
                item={item}
                onRemove={() => removeItem(index)}
              />
            ))}
          </div>
        </div>

        <PaymentMethod selected={paymentMethod} onSelect={setPaymentMethod} />

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-base">Ti plaćaš <span className="text-xs text-gray-400">s PDV-om</span></p>
            <p className="text-xl font-bold">{totalPrice.toFixed(2)} $</p>
          </div>
          <button
            onClick={handleConfirm}
            disabled={!paymentMethod || submitting}
            className="w-full py-3 rounded-full text-white text-sm font-semibold disabled:opacity-50"
            style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}
          >
            {submitting ? 'Naručujem...' : 'Potvrdi narudžbu'}
          </button>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}

export default Checkout
