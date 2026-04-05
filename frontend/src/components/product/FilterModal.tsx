import { useState } from 'react'

const colors = [
  { name: 'Crna', value: 'rgba(0, 0, 0, 1)' },
  { name: 'Bijela', value: 'rgba(255, 255, 255, 1)' },
  { name: 'Siva', value: 'rgba(128, 128, 128, 1)' },
  { name: 'Plava', value: 'rgba(51, 64, 75, 1)' },
  { name: 'Zelena', value: 'rgba(29, 111, 63, 1)' },
  { name: 'Crvena', value: 'rgba(218, 63, 68, 1)' },
  { name: 'Žuta', value: 'rgba(253, 187, 4, 1)' },
]

type Props = {
  selectedColor: string
  onSelectColor: (color: string) => void
  onClose: () => void
}

function FilterModal({ selectedColor, onSelectColor, onClose }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-16">
      <div className="bg-white w-full max-w-[360px] rounded-lg p-5 min-h-[400px] flex flex-col">
        <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: 'rgba(90, 62, 54, 1)' }}>
          <h2 className="text-lg font-bold">Filter</h2>
          <button onClick={onClose} className="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs" style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}>✕</button>
        </div>

        <div className="mt-4">
          <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center border-b pb-3" style={{ borderColor: 'rgba(90, 62, 54, 1)' }}>
            <span className="text-base font-semibold">Boja</span>
            <span className="text-gray-400">{open ? '∧' : '∨'}</span>
          </button>

          {open && (
            <div className="flex flex-col gap-3 mt-3 border-b pb-3" style={{ borderColor: 'rgba(90, 62, 54, 1)' }}>
              <button
                onClick={() => onSelectColor('')}
                className={`flex items-center gap-3 text-sm ${!selectedColor ? 'font-bold' : ''}`}
              >
                <span className="w-4 h-4 rounded-full border-2 border-gray-400" />
                Sve boje
              </button>
              {colors.map(c => (
                <button
                  key={c.name}
                  onClick={() => onSelectColor(c.value)}
                  className={`flex items-center gap-3 text-sm ${selectedColor === c.value ? 'font-bold' : ''}`}
                >
                  <span className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: c.value }} />
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto border-t pt-3" style={{ borderColor: 'rgba(90, 62, 54, 1)' }} />
      </div>
    </div>
  )
}

export default FilterModal
