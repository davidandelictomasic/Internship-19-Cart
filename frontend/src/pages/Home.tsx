import Navbar from '../components/layout/Navbar'
import BottomNav from '../components/layout/BottomNav'
import SearchBar from '../components/search/SearchBar'
import ProductGrid from '../components/product/ProductGrid'

function Home() {
  return (
    <div className="pb-16">
      <Navbar />
      <SearchBar />
      <ProductGrid />
      <BottomNav />
    </div>
  )
}

export default Home
