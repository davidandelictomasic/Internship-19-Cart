import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'

function ProductDetail() {
  return (
    <div className="pb-16 bg-white min-h-screen">
      <Navbar />

      <div className="flex justify-center bg-gray-100 mx-4 rounded-lg">
        <img
          src="/assets/products/nikeHlaceRoze.png"
          alt="Example product"
          className="object-contain h-[220px] py-4"
        />
      </div>

      <div className="px-6 mt-4">
        <h1 className="text-lg font-bold uppercase">Example Product</h1>
        <p className="text-base mt-1">20 $</p>

        <div className="flex gap-2 mt-3">
          <span className="w-7 h-7 rounded-full border border-gray-200" style={{ backgroundColor: 'rgba(29, 111, 63, 1)' }} />
          <span className="w-7 h-7 rounded-full border border-gray-200" style={{ backgroundColor: 'rgba(218, 63, 68, 1)' }} />
        </div>

        <p className="text-sm mt-5">Izaberi veličinu:</p>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="border border-gray-300 rounded-full py-3 text-sm text-center">S</button>
          <button className="border border-gray-300 rounded-full py-3 text-sm text-center">M</button>
          <button className="border border-gray-300 rounded-full py-3 text-sm text-center">L</button>
          <button className="border border-gray-300 rounded-full py-3 text-sm text-center">XL</button>
        </div>

        <div className="flex gap-3 mt-5">
          <button className="flex-1 bg-[#6B4226] text-white rounded-full py-3 text-sm font-semibold uppercase">
            Dodaj u košaricu
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-lg">&#9825;</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default ProductDetail
