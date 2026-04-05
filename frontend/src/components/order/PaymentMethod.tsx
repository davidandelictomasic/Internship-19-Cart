import bankCard from '../../assets/payment/bank-card.png'
import moneyEuro from '../../assets/payment/money-euro-box.png'

type Props = {
  selected: string
  onSelect: (method: string) => void
}

function PaymentMethod({ selected, onSelect }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <h2 className="text-sm font-bold uppercase mb-3">Oblik plaćanja</h2>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => onSelect('card')}
          className={`flex items-center gap-3 border rounded-lg px-4 py-3 text-sm ${
            selected === 'card' ? 'border-black' : 'border-gray-200'
          }`}
        >
          <img src={bankCard} alt="Card" className="w-6 h-6" />
          <span className="font-semibold uppercase">Kreditna kartica</span>
        </button>
        <button
          onClick={() => onSelect('cash')}
          className={`flex items-center gap-3 border rounded-lg px-4 py-3 text-sm ${
            selected === 'cash' ? 'border-black' : 'border-gray-200'
          }`}
        >
          <img src={moneyEuro} alt="Cash" className="w-6 h-6" />
          <span className="font-semibold uppercase">Gotovina</span>
        </button>
      </div>
    </div>
  )
}

export default PaymentMethod
