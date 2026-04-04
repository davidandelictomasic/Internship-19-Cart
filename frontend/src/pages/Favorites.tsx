import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import ProductPreview from '../components/ProductPreview'
import { useFavorites } from '../hooks/useFavorites'

function Favorites() {
  const { favorites, loading, error } = useFavorites()

  return (
    <div className="pb-16 bg-white min-h-screen">
      <Navbar />

      <h1 className="text-lg font-bold px-4 mt-4">Favoriti</h1>

      {loading && <p className="text-center mt-8 text-gray-400">Loading...</p>}
      {error && <p className="text-center mt-8 text-red-400">{error}</p>}

      {!loading && !error && favorites.length === 0 && (
        <p className="text-center mt-16 text-gray-400">Nemate favorita.</p>
      )}

      <div className="px-4 mt-3 grid grid-cols-2 gap-3">
        {favorites.map(fav => (
          <ProductPreview key={fav.id} product={fav.product} />
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

export default Favorites
