import { useNavigate } from 'react-router-dom'
import searchIcon from '../../assets/search/search-icon.png'

function SearchBar() {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center px-4 py-3">
      <button
        onClick={() => navigate('/search')}
        className="w-full max-w-[345px] h-[48px] rounded-lg px-4 py-3 flex items-center gap-2"
        style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}
      >
        <img src={searchIcon} alt="Search" className="w-[18px] h-[18px]" />
        <span className="text-gray-400 text-sm">Search for...</span>
      </button>
    </div>
  )
}

export default SearchBar
