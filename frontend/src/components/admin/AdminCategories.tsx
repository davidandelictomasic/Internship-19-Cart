import { useState } from 'react'
import { useAdminCategories } from '../../hooks/admin/useAdminCategories'

function AdminCategories() {
  const { categories, createCategory, deleteCategory } = useAdminCategories()
  const [newName, setNewName] = useState('')

  const handleCreate = () => {
    if (!newName) return
    createCategory(newName)
    setNewName('')
  }

  const handleDelete = (cat: any) => {
    if (cat.products?.length > 0) {
      if (!confirm(`Kategorija "${cat.name}" ima ${cat.products.length} proizvoda. Obrisati?`)) return
    } else {
      if (!confirm(`Obrisati kategoriju "${cat.name}"?`)) return
    }
    deleteCategory(cat.id)
  }

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Kategorije</h2>

      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <input placeholder="Nova kategorija" value={newName} onChange={e => setNewName(e.target.value)} style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', width: 300 }} />
        <button onClick={handleCreate} style={{ padding: '8px 16px', borderRadius: 6, background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Dodaj</button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
            <th style={{ padding: 8 }}>ID</th>
            <th style={{ padding: 8 }}>Naziv</th>
            <th style={{ padding: 8 }}>Broj proizvoda</th>
            <th style={{ padding: 8 }}>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: 8 }}>{c.id}</td>
              <td style={{ padding: 8 }}>{c.name}</td>
              <td style={{ padding: 8 }}>{c.products?.length || 0}</td>
              <td style={{ padding: 8 }}>
                <button onClick={() => handleDelete(c)} style={{ color: 'red', cursor: 'pointer' }}>Obriši</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminCategories
