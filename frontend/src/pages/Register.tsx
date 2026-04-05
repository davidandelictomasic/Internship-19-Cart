import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cartLogo from '../assets/welcome_animation/cart logo.png'
import brandName from '../assets/welcome_animation/brand name.png'
import { useAuth } from '../hooks/user/useAuth'

function Register() {
  const navigate = useNavigate()
  const { register, loading, error } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await register({ email, password, name, address })
    if (result) navigate('/home')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-16">
      <div className="flex items-center gap-2 mb-12">
        <img src={cartLogo} alt="Cart logo" className="w-10 h-10" />
        <img src={brandName} alt="CART" className="h-7" />
      </div>

      <h1 className="text-2xl font-bold mb-2">Create account</h1>
      <p className="text-gray-400 mb-8">Sign up to get started</p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500 mb-1 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500 mb-1 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500 mb-1 block">Address (optional)</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St, City"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white rounded-full py-3 text-sm font-semibold mt-4 disabled:opacity-50"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6">
        Already have an account?{' '}
        <button onClick={() => navigate('/login')} className="text-black font-semibold">
          Sign In
        </button>
      </p>
    </div>
  )
}

export default Register
