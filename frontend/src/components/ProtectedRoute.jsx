import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth()

  if (loading) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <p className="text-green-400 text-xl font-bold animate-pulse">Loading...</p>
    </div>
  )

  if (!user) return <Navigate to="/login" />
  if (adminOnly && !user.is_admin) return <Navigate to="/" />

  return children
}

export default ProtectedRoute