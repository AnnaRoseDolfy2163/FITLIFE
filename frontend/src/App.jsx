import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import ExerciseGuide from './pages/ExerciseGuide/ExerciseGuide'
import WorkoutPlanner from './pages/WorkoutPlanner/WorkoutPlanner'
import SelfCare from './pages/SelfCare/SelfCare'
import Nutrition from './pages/Nutrition/Nutrition'
import AdminDashboard from './pages/Admin/AdminDashboard'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const location = useLocation()
  const isAdminPage = location.pathname === '/admin'

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/exercise-guide" element={<ProtectedRoute><ExerciseGuide /></ProtectedRoute>} />
        <Route path="/workout-planner" element={<ProtectedRoute><WorkoutPlanner /></ProtectedRoute>} />
        <Route path="/self-care" element={<ProtectedRoute><SelfCare /></ProtectedRoute>} />
        <Route path="/nutrition" element={<ProtectedRoute><Nutrition /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute adminOnly={true}><AdminDashboard /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App