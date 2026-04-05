import { useState } from 'react'
import { useAdminProducts } from '../../hooks/useAdminProducts'
import { useCategories } from '../../hooks/useCategories'

function AdminProducts() {
  const { products, createProduct, updateProduct, deleteProduct } = useAdminProducts()
  const { categories } = useCategories()
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState<any>(null)
  const [form, setForm] = useState({ name: '', price: '', brand: '', categoryId: '', sizes: '', colors: '', posterUrls: '', isAvailable: true, description: '' })

  const resetForm = () => {
    setForm({ name: '', price: '', brand: '', categoryId: '', sizes: '', colors: '', posterUrls: '', isAvailable: true, description: '' })
    setEditing(null)
  }

  const handleEdit = (p: any) => {
    setEditing(p)
    setForm({ name: p.name, price: String(p.price), brand: p.brand || '', categoryId: p.categoryId ? String(p.categoryId) : '', sizes: p.sizes.join(', '), colors: p.colors.join(', '), posterUrls: p.posterUrls.join(', '), isAvailable: p.isAvailable, description: p.description || '' })
  }

  const handleSubmit = () => {
    const body = {
      name: form.name, price: Number(form.price), brand: form.brand || undefined, description: form.description || undefined,
      categoryId: form.categoryId ? Number(form.categoryId) : undefined,
      sizes: form.sizes ? form.sizes.split(',').map(s => s.trim()) : [],
      colors: form.colors ? form.colors.split(',').map(s => s.trim()) : [],
      posterUrls: form.posterUrls ? form.posterUrls.split(',').map(s => s.trim()) : [],
      isAvailable: form.isAvailable,
    }
    if (editing) { updateProduct(editing.id, body) } else { createProduct(body) }
    resetForm()
  }

  const handleDelete = (id: number) => {
    if (confirm('Obrisati proizvod?')) deleteProduct(id)
  }

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Proizvodi</h2>

      <div style={{ marginBottom: 16, padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
        <h3>{editing ? 'Uredi proizvod' : 'Novi proizvod'}</h3>
        <input placeholder="Naziv" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
        <input placeholder="Cijena" type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} style={inputStyle} />
        <input placeholder="Brand" value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })} style={inputStyle} />
        <input placeholder="Opis" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} style={inputStyle} />
        <select value={form.categoryId} onChange={e => setForm({ ...form, categoryId: e.target.value })} style={inputStyle}>
          <option value="">Kategorija</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <input placeholder="Veličine (S, M, L)" value={form.sizes} onChange={e => setForm({ ...form, sizes: e.target.value })} style={inputStyle} />
        <input placeholder="Boje" value={form.colors} onChange={e => setForm({ ...form, colors: e.target.value })} style={inputStyle} />
        <input placeholder="Slike (url1, url2)" value={form.posterUrls} onChange={e => setForm({ ...form, posterUrls: e.target.value })} style={inputStyle} />
        <label><input type="checkbox" checked={form.isAvailable} onChange={e => setForm({ ...form, isAvailable: e.target.checked })} /> Dostupno</label>
        <br />
        <button onClick={handleSubmit} style={btnStyle}>{editing ? 'Spremi' : 'Dodaj'}</button>
        {editing && <button onClick={resetForm} style={{ ...btnStyle, background: '#fff', color: '#333', border: '1px solid #ccc', marginLeft: 8 }}>Odustani</button>}
      </div>

      <input placeholder="Pretraži..." value={search} onChange={e => setSearch(e.target.value)} style={{ ...inputStyle, marginBottom: 12 }} />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
            <th style={cellStyle}>ID</th><th style={cellStyle}>Naziv</th><th style={cellStyle}>Cijena</th><th style={cellStyle}>Brand</th><th style={cellStyle}>Kategorija</th><th style={cellStyle}>Dostupno</th><th style={cellStyle}>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={cellStyle}>{p.id}</td>
              <td style={cellStyle}>{p.name}</td>
              <td style={cellStyle}>{p.price.toFixed(2)} $</td>
              <td style={cellStyle}>{p.brand || '-'}</td>
              <td style={cellStyle}>{p.category?.name || '-'}</td>
              <td style={cellStyle}>{p.isAvailable ? 'Da' : 'Ne'}</td>
              <td style={cellStyle}>
                <button onClick={() => handleEdit(p)} style={{ marginRight: 4, cursor: 'pointer' }}>Uredi</button>
                <button onClick={() => handleDelete(p.id)} style={{ color: 'red', cursor: 'pointer' }}>Obriši</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const inputStyle: React.CSSProperties = { padding: 8, borderRadius: 6, border: '1px solid #ccc', display: 'block', marginBottom: 8, width: '100%' }
const btnStyle: React.CSSProperties = { padding: '8px 16px', borderRadius: 6, background: '#333', color: '#fff', border: 'none', cursor: 'pointer', marginTop: 8 }
const cellStyle: React.CSSProperties = { padding: 8 }

export default AdminProducts
