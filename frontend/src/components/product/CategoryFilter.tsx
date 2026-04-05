const categories = ['Sve', 'Streetwear', 'Formal', 'Casual', 'Sport']

type Props = {
  selected: string
  onSelect: (category: string) => void
}

function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-3">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="rounded-[20px] px-2 py-1 text-sm whitespace-nowrap"
          style={{
            minWidth: '74px',
            height: '28px',
            border: '1px solid rgba(90, 62, 54, 1)',
            backgroundColor: selected === cat ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
            color: selected === cat ? 'white' : 'black',
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
