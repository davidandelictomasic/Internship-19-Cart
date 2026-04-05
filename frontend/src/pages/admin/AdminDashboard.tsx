import { useState } from 'react'
import AdminProducts from '../../components/admin/AdminProducts'
import AdminCategories from '../../components/admin/AdminCategories'
import AdminOrders from '../../components/admin/AdminOrders'

const tabs = ['Proizvodi', 'Kategorije', 'Narudžbe']

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Proizvodi')

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Admin Dashboard</h1>
        <button onClick={handleLogout} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}>Odjava</button>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 20px',
              borderRadius: 6,
              border: '1px solid #ccc',
              background: activeTab === tab ? '#333' : '#fff',
              color: activeTab === tab ? '#fff' : '#333',
              cursor: 'pointer',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Proizvodi' && <AdminProducts />}
      {activeTab === 'Kategorije' && <AdminCategories />}
      {activeTab === 'Narudžbe' && <AdminOrders />}
    </div>
  )
}

export default AdminDashboard
