import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div className="pb-16">
      <Navbar />
      <SearchBar />
      <BottomNav />
    </div>
  )
}

export default Home
