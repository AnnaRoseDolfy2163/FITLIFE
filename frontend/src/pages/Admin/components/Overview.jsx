import { FaUsers, FaDumbbell, FaClipboardList, FaHeartbeat } from 'react-icons/fa'

const stats = [
  { label: 'Total Users', value: '24', icon: <FaUsers />, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'Active Plans', value: '12', icon: <FaClipboardList />, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  { label: 'Exercises', value: '48', icon: <FaDumbbell />, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { label: 'Progress Logs', value: '136', icon: <FaHeartbeat />, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30' },
]

const recentUsers = [
  { name: 'Sarah Johnson', email: 'sarah@email.com', gender: 'Female', age: 25, joined: '2025-01-28', status: 'Active' },
  { name: 'Mike Chen', email: 'mike@email.com', gender: 'Male', age: 30, joined: '2025-01-26', status: 'Active' },
  { name: 'Priya Nair', email: 'priya@email.com', gender: 'Female', age: 22, joined: '2025-01-25', status: 'Active' },
  { name: 'James Lee', email: 'james@email.com', gender: 'Male', age: 28, joined: '2025-01-24', status: 'Inactive' },
]

const activities = [
  { text: 'Sarah Johnson completed Beginner Full Body plan', time: '2 hours ago', emoji: '🏋️' },
  { text: 'Mike Chen logged a workout session', time: '4 hours ago', emoji: '📋' },
  { text: 'Priya Nair updated her period tracker', time: '6 hours ago', emoji: '🌸' },
  { text: 'James Lee calculated his BMI', time: '1 day ago', emoji: '⚖️' },
  { text: 'New user registered: Alex Smith', time: '1 day ago', emoji: '👤' },
]

function Overview() {
  return (
    <div className="space-y-8">

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`bg-gray-900 border ${stat.border} rounded-2xl p-5`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>
            <p className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Users */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-5">👥 Recent Users</h3>
          <div className="space-y-3">
            {recentUsers.map((user) => (
              <div key={user.email} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center text-black font-extrabold text-sm">
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{user.name}</p>
                    <p className="text-gray-400 text-xs">{user.email}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  user.status === 'Active'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                    : 'bg-red-500/10 text-red-400 border border-red-500/30'
                }`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-5">⚡ Recent Activity</h3>
          <div className="space-y-3">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-800 rounded-xl px-4 py-3">
                <span className="text-xl shrink-0">{activity.emoji}</span>
                <div>
                  <p className="text-white text-sm">{activity.text}</p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Overview