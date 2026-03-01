import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logoutUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate('/')
  }

  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to={user ? '/dashboard' : '/'} className="text-2xl font-bold tracking-wide">💪 FitLife</Link>

      <div className="flex gap-6 text-sm font-medium items-center">
        {user ? (
          <>
            {/* Show these only when logged in */}
            {!user.is_admin && (
              <>
                <Link to="/exercise-guide" className="hover:text-green-200">Exercise Guide</Link>
                <Link to="/workout-planner" className="hover:text-green-200">Workout Planner</Link>
                <Link to="/self-care" className="hover:text-green-200">Self Care</Link>
                <Link to="/nutrition" className="hover:text-green-200">Nutrition</Link>
              </>
            )}
            {user.is_admin && (
              <Link to="/admin" className="hover:text-green-200">Admin Dashboard</Link>
            )}
            <span className="text-green-200 text-xs">👋 {user.full_name || user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-green-600 px-3 py-1 rounded-full hover:bg-green-100"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Show these only when logged out */}
            <Link to="/login" className="bg-white text-green-600 px-3 py-1 rounded-full hover:bg-green-100">Login</Link>
            <Link to="/register" className="border border-white text-white px-3 py-1 rounded-full hover:bg-green-500">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar