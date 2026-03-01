import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { loginUser } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/users/login/', formData)
      const userData = { ...res.data.user, is_admin: res.data.is_admin }
      loginUser(userData, res.data.access)
      if (res.data.is_admin) {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm mb-6 transition">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-extrabold text-white mb-2">Welcome Back 👋</h1>
            <p className="text-gray-400 text-sm">Login to continue your fitness journey</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm mb-5 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="your username"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl text-sm transition disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-xs px-3">OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-400 font-semibold hover:underline">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login