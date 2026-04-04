import { useState } from 'react'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import ProductPreview from '../components/ProductPreview'
import CategoryFilter from '../components/CategoryFilter'
import { useProducts } from '../hooks/useProducts'
import { useFavorites } from '../hooks/useFavorites'

function Search() {
  const { products, loading, error } = useProducts()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [selectedCategory, setSelectedCategory] = useState('Sve')

  const filtered = selectedCategory === 'Sve'
    ? products
    : products.filter(p => p.category.name === selectedCategory)

  return (
    <div className="pb-16 bg-white min-h-screen">
      <Navbar />
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      {loading && <p className="text-center mt-8 text-gray-400">Loading...</p>}
      {error && <p className="text-center mt-8 text-red-400">{error}</p>}

      <div className="px-4 mt-3 grid grid-cols-2 gap-3">
        {filtered.map(product => (
          <ProductPreview
            key={product.id}
            product={product}
            isFavorite={isFavorite(product.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

export default Search
