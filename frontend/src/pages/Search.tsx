import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import BottomNav from '../components/layout/BottomNav'
import ProductPreview from '../components/product/ProductPreview'
import CategoryFilter from '../components/product/CategoryFilter'
import FilterModal from '../components/product/FilterModal'
import { useProducts } from '../hooks/products/useProducts'
import { useFavorites } from '../hooks/products/useFavorites'
import searchIcon from '../assets/search/search-icon.png'
import filterIcon from '../assets/search/filter-icon.png'

function Search() {
  const { products, loading, error } = useProducts()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.focus()
  }, [])

  const hasInteracted = searchQuery.length > 0 || selectedCategory !== '' || selectedColor !== ''

  const filtered = products.filter(p => {
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Sve' || p.category?.name === selectedCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesColor = selectedColor === '' || p.colors.includes(selectedColor)
    return matchesCategory && matchesSearch && matchesColor
  })

  return (
    <div className="pb-16 bg-white min-h-screen">
      <Navbar />

      <div className="flex justify-center px-4 py-3">
        <div
          className="w-full max-w-[345px] h-[48px] rounded-lg px-4 py-3 flex items-center gap-2"
          style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}
        >
          <img src={searchIcon} alt="Search" className="w-[18px] h-[18px]" />
          <input
            ref={searchRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for..."
            className="bg-transparent text-sm w-full focus:outline-none"
          />
        </div>
      </div>

      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

      {loading && <p className="text-center mt-8 text-gray-400">Loading...</p>}
      {error && <p className="text-center mt-8 text-red-400">{error}</p>}

      {hasInteracted && (
        <div className="px-4 mt-3 grid grid-cols-2 gap-3">
          {filtered.map(product => (
            <ProductPreview
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
          {filtered.length === 0 && !loading && (
            <p className="col-span-2 text-center mt-8 text-gray-400">Nema rezultata.</p>
          )}
        </div>
      )}

      <button
        onClick={() => setShowFilter(true)}
        className="fixed bottom-20 right-4 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 border border-gray-200 z-40"
      >
        <img src={filterIcon} alt="Filter" className="w-4 h-4" />
        <span className="text-sm">Filter</span>
      </button>

      {showFilter && (
        <FilterModal
          selectedColor={selectedColor}
          onSelectColor={(c) => { setSelectedColor(c); setShowFilter(false) }}
          onClose={() => setShowFilter(false)}
        />
      )}

      <BottomNav />
    </div>
  )
}

export default Search
