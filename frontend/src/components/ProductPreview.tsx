import { useNavigate } from 'react-router-dom'
import type { Product } from '../hooks/products/useProducts'
import heartIcon from '../assets/heart-outline.png'
import heartOutlined from '../assets/heart-filled.png'

type Props = {
  product: Product
  isFavorite?: boolean
  onToggleFavorite?: (productId: number) => void
}

function ProductPreview({ product, isFavorite: favorited = false, onToggleFavorite }: Props) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="relative bg-gray-50 rounded-lg p-3 flex items-center justify-center h-[200px]">
        <img
          src={product.posterUrls[0]}
          alt={product.name}
          className="object-contain max-h-[170px] max-w-full"
        />
        <button
          className="absolute top-2 right-2"
          onClick={(e) => { e.stopPropagation(); onToggleFavorite?.(product.id) }}
        >
          <img src={favorited ? heartOutlined : heartIcon} alt="Favorite" className="w-5 h-5" />
        </button>
      </div>
      <p className="text-sm font-bold mt-2 text-center uppercase">{product.name}</p>
      <p className="text-xs text-gray-400 text-center">{product.category.name}</p>
      <p className="text-sm font-medium text-center mt-1">{product.price.toFixed(2)} $</p>
      {product.colors.length > 0 && (
        <div className="flex gap-1 justify-center mt-1">
          {product.colors.map((color, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductPreview
