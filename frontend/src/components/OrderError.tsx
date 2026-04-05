import errorIcon from '../assets/error-warning.png'

function OrderError({ onClose }: { onClose: () => void }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgba(90, 62, 54, 1)' }}>
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white text-2xl">✕</button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <img src={errorIcon} alt="Error" className="w-16 h-16 mb-4" />
        <p className="text-white font-bold uppercase tracking-wide">Dogodila se greška</p>
      </div>
    </div>
  )
}

export default OrderError
