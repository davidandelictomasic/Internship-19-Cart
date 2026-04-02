import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import SearchBar from '../components/SearchBar'
import ProductGrid from '../components/ProductGrid'

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
