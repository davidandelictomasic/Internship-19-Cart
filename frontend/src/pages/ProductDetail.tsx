import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import { useProduct } from '../hooks/useProduct'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { product, loading, error } = useProduct(Number(id))
  const [selectedColor, setSelectedColor] = useState(0)

  if (loading) return <div className="min-h-screen bg-white"><Navbar /><p className="text-center mt-8 text-gray-400">Loading...</p></div>
  if (error || !product) return <div className="min-h-screen bg-white"><Navbar /><p className="text-center mt-8 text-red-400">Product not found</p></div>

  return (
    <div className="pb-16 bg-white min-h-screen">
      <Navbar />

      <div className="flex justify-center bg-gray-100 mx-4 rounded-lg">
        <img
          src={product.posterUrls[selectedColor] || product.posterUrls[0]}
          alt={product.name}
          className="object-contain h-[220px] py-4"
        />
      </div>

      <div className="px-6 mt-4">
        <h1 className="text-lg font-bold uppercase">{product.name}</h1>
        <p className="text-base mt-1">{product.price.toFixed(2)} $</p>

        {product.colors.length > 0 && (
          <div className="flex gap-2 mt-3">
            {product.colors.map((color, i) => (
              <span
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`w-7 h-7 rounded-full border-2 cursor-pointer ${selectedColor === i ? 'border-black' : 'border-gray-200'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <p className="text-sm mt-5">Izaberi veličinu:</p>

        <div className="grid grid-cols-2 gap-3 mt-3">
          {product.sizes.map(size => (
            <button key={size} className="border border-gray-300 rounded-full py-3 text-sm text-center">
              {size}
            </button>
          ))}
        </div>

        <button className="w-full bg-[#6B4226] text-white rounded-full py-3 text-sm font-semibold uppercase mt-5">
          Dodaj u košaricu
        </button>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm"
            style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}
          >
            ✕
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default ProductDetail
