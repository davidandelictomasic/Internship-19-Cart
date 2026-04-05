import type { CartItem as CartItemType } from '../../hooks/products/useCart'

type Props = {
  item: CartItemType
  onRemove: () => void
}

function CartItem({ item, onRemove }: Props) {
  return (
    <div className="flex gap-4 border border-gray-200 rounded-lg p-3">
      <div className="w-[120px] h-[140px] bg-gray-50 rounded-lg flex items-center justify-center">
        <img src={item.posterUrl} alt={item.name} className="object-contain max-h-[120px]" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase">{item.brand}</p>
          <p className="text-xs text-gray-400">{item.category}</p>
          <p className="text-sm font-bold uppercase">{item.name}</p>
          <p className="text-xs text-gray-500 mt-1">
            {item.selectedColor && (
              <span className="inline-block w-3 h-3 rounded-full mr-1 align-middle border border-gray-200" style={{ backgroundColor: item.selectedColor }} />
            )}
            {item.selectedSize}
          </p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-sm font-bold" style={{ color: 'rgba(180, 40, 40, 1)' }}>{item.price.toFixed(2)} $</p>
          <button onClick={onRemove} className="text-xs text-gray-400 underline">Ukloni</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
