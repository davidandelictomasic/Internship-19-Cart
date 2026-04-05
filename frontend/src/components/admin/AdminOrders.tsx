import { useState } from 'react'
import { useAdminOrders } from '../../hooks/admin/useAdminOrders'

const statuses = ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED']

function AdminOrders() {
  const { orders, updateStatus } = useAdminOrders()
  const [statusFilter, setStatusFilter] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filtered = statusFilter ? orders.filter(o => o.status === statusFilter) : orders

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Narudžbe</h2>

      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <button onClick={() => setStatusFilter('')} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #ccc', background: !statusFilter ? '#333' : '#fff', color: !statusFilter ? '#fff' : '#333', cursor: 'pointer' }}>Sve</button>
        {statuses.map(s => (
          <button key={s} onClick={() => setStatusFilter(s)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #ccc', background: statusFilter === s ? '#333' : '#fff', color: statusFilter === s ? '#fff' : '#333', cursor: 'pointer' }}>{s}</button>
        ))}
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
            <th style={{ padding: 8 }}>ID</th>
            <th style={{ padding: 8 }}>Korisnik</th>
            <th style={{ padding: 8 }}>Adresa</th>
            <th style={{ padding: 8 }}>Ukupno</th>
            <th style={{ padding: 8 }}>Status</th>
            <th style={{ padding: 8 }}>Datum</th>
            <th style={{ padding: 8 }}>Promijeni status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(o => (
            <tr key={o.id} style={{ borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => setExpandedId(expandedId === o.id ? null : o.id)}>
              <td style={{ padding: 8 }}>{o.id}</td>
              <td style={{ padding: 8 }}>{o.userId}</td>
              <td style={{ padding: 8 }}>{o.deliveryAddress}</td>
              <td style={{ padding: 8 }}>{o.totalPrice.toFixed(2)} $</td>
              <td style={{ padding: 8 }}>{o.status}</td>
              <td style={{ padding: 8 }}>{new Date(o.createdAt).toLocaleDateString()}</td>
              <td style={{ padding: 8 }}>
                <select value={o.status} onClick={e => e.stopPropagation()} onChange={e => updateStatus(o.id, e.target.value)} style={{ padding: 4, borderRadius: 4, border: '1px solid #ccc' }}>
                  {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminOrders
