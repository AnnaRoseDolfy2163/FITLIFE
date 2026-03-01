import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

function Register() {
  const [formData, setFormData] = useState({
    full_name: '', username: '', email: '', password: '', confirmPassword: '', gender: '', age: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { loginUser } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { confirmPassword, ...dataToSend } = formData
      const res = await axios.post('http://127.0.0.1:8000/api/users/register/', dataToSend)
      loginUser(res.data.user, res.data.access)
      navigate('/dashboard')
    } catch (err) {
      const errors = err.response?.data
      if (errors) {
        const firstError = Object.values(errors)[0]
        setError(Array.isArray(firstError) ? firstError[0] : firstError)
      } else {
        setError('Registration failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm mb-6 transition">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-extrabold text-white mb-2">Create Account 🚀</h1>
            <p className="text-gray-400 text-sm">Join FitLife and start your journey today</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm mb-5 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Full Name</label>
              <input type="text" name="full_name" value={formData.full_name} onChange={handleChange}
                placeholder="John Doe" required
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange}
                placeholder="johndoe" required
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-1 block">Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange}
                  placeholder="25" required
                  className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
              </div>
              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-1 block">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required
                  className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition">
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange}
                placeholder="••••••••" required
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Confirm Password</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                placeholder="••••••••" required
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl text-sm transition disabled:opacity-50">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-xs px-3">OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-green-400 font-semibold hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register