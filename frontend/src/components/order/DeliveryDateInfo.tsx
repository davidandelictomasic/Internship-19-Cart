function DeliveryDateInfo() {
  const deliveryStart = new Date()
  deliveryStart.setDate(deliveryStart.getDate() + 7)
  const deliveryEnd = new Date()
  deliveryEnd.setDate(deliveryEnd.getDate() + 14)
  const formatDate = (d: Date) => `${d.getDate()}.${d.getMonth() + 1}.`

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="font-bold text-sm">Dostava</p>
        <p className="text-xs text-gray-400">Šalje CART</p>
      </div>
      <span className="text-xs bg-gray-100 rounded-full px-3 py-1">
        {formatDate(deliveryStart)} - {formatDate(deliveryEnd)}
      </span>
    </div>
  )
}

export default DeliveryDateInfo
