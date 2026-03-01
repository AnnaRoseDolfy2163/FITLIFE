import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Overview from './components/Overview'
import ManageUsers from './components/ManageUsers'
import ManageContent from './components/ManageContent'
import Reports from './components/Reports'

const tabs = [
  { id: 'overview', label: 'Overview', emoji: '📊' },
  { id: 'users', label: 'Manage Users', emoji: '👥' },
  { id: 'content', label: 'Manage Content', emoji: '📚' },
  { id: 'reports', label: 'Reports', emoji: '📈' },
]

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const { user, logoutUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ADMIN HEADER */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-b border-gray-800 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Admin Panel</p>
            <h1 className="text-4xl font-extrabold mb-1">Welcome, <span className="text-green-400">{user?.username}</span> ⚙️</h1>
            <p className="text-gray-400">Manage users, content, and monitor FitLife platform</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl px-5 py-3 text-center">
              <p className="text-green-400 text-xs font-semibold uppercase tracking-widest">Role</p>
              <p className="text-white font-bold">Administrator</p>
            </div>
            <button onClick={handleLogout}
              className="bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 font-bold px-5 py-3 rounded-2xl transition text-sm">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-4 flex-wrap px-6 py-8 border-b border-gray-800">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition border ${
              activeTab === tab.id
                ? 'bg-green-500 text-black border-green-500'
                : 'bg-gray-900 text-gray-400 border-gray-700 hover:border-green-500 hover:text-green-400'
            }`}>
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10 pb-20">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'users' && <ManageUsers />}
        {activeTab === 'content' && <ManageContent />}
        {activeTab === 'reports' && <Reports />}
      </div>

    </div>
  )
}

export default AdminDashboard