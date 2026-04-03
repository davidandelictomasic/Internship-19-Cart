import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import ProductPreview from '../components/ProductPreview'
import { useProducts } from '../hooks/useProducts'

function Search() {
  const { products, loading, error } = useProducts()

  return (
    <div className="pb-16 bg-white min-h-screen">
      <Navbar />

      {loading && <p className="text-center mt-8 text-gray-400">Loading...</p>}
      {error && <p className="text-center mt-8 text-red-400">{error}</p>}

      <div className="px-4 mt-3 grid grid-cols-2 gap-3">
        {products.map(product => (
          <ProductPreview key={product.id} product={product} />
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

export default Search
