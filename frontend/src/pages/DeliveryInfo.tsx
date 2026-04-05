import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import { useUser } from '../hooks/user/useUser'
import { useUpdateUser } from '../hooks/user/useUpdateUser'
import truckIcon from '../assets/truck.png'

function DeliveryInfo() {
  const navigate = useNavigate()
  const { user } = useUser()
  const { updateUser } = useUpdateUser()
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [billingAddress, setBillingAddress] = useState('')
  const [editingDelivery, setEditingDelivery] = useState(false)
  const [editingBilling, setEditingBilling] = useState(false)

  useEffect(() => {
    if (user?.address) {
      setDeliveryAddress(user.address)
      setBillingAddress(user.address)
    }
  }, [user])

  const handleContinue = async () => {
    if (!deliveryAddress || !billingAddress) return

    await updateUser({ address: deliveryAddress })

    localStorage.setItem('deliveryAddress', deliveryAddress)
    localStorage.setItem('billingAddress', billingAddress)
    navigate('/checkout')
  }

  return (
    <div className="pb-16 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-center py-6">Blagajna</h1>

      <div className="px-4 flex flex-col gap-4">

        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold uppercase">Adresa dostave</h2>
            <img src={truckIcon} alt="Delivery" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-sm font-semibold">Poštanska adresa</p>
            <button
              onClick={() => setEditingDelivery(!editingDelivery)}
              className="text-xs text-white px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}
            >
              PROMIJENI
            </button>
          </div>
          {editingDelivery ? (
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mt-2 focus:outline-none focus:border-black"
            />
          ) : (
            <p className="text-sm text-gray-500 mt-2">{deliveryAddress || 'Nije unesena'}</p>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold uppercase">Adresa naplate</h2>
            <img src={truckIcon} alt="Billing" className="w-6 h-6" />
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-sm font-semibold">Poštanska adresa</p>
            <button
              onClick={() => setEditingBilling(!editingBilling)}
              className="text-xs text-white px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}
            >
              PROMIJENI
            </button>
          </div>
          {editingBilling ? (
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mt-2 focus:outline-none focus:border-black"
            />
          ) : (
            <p className="text-sm text-gray-500 mt-2">{billingAddress || 'Nije unesena'}</p>
          )}
        </div>

        <button
          onClick={handleContinue}
          disabled={!deliveryAddress || !billingAddress}
          className="w-full py-3 rounded-full text-white text-sm font-semibold disabled:opacity-50 mt-4"
          style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}
        >
          Nastavi
        </button>

      </div>

      <BottomNav />
    </div>
  )
}

export default DeliveryInfo
