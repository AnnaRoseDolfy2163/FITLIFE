import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts'

const userGrowth = [
  { month: 'Aug', users: 4 },
  { month: 'Sep', users: 8 },
  { month: 'Oct', users: 11 },
  { month: 'Nov', users: 15 },
  { month: 'Dec', users: 19 },
  { month: 'Jan', users: 24 },
]

const activityData = [
  { month: 'Aug', workouts: 12, logs: 20 },
  { month: 'Sep', workouts: 22, logs: 38 },
  { month: 'Oct', workouts: 30, logs: 55 },
  { month: 'Nov', workouts: 45, logs: 72 },
  { month: 'Dec', workouts: 52, logs: 89 },
  { month: 'Jan', workouts: 61, logs: 136 },
]

const planDistribution = [
  { name: 'Weight Loss', value: 8 },
  { name: 'Muscle Builder', value: 5 },
  { name: 'Beginner Full Body', value: 4 },
  { name: "Women's Toning", value: 4 },
  { name: 'Cardio Endurance', value: 3 },
]

const COLORS = ['#22C55E', '#3B82F6', '#F59E0B', '#EC4899', '#8B5CF6']

const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#1F2937',
    border: '1px solid #374151',
    borderRadius: '12px',
    color: '#fff'
  }
}

function Reports() {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Analytics</p>
        <h2 className="text-3xl font-extrabold">Reports & Insights 📊</h2>
        <p className="text-gray-400 mt-2">Monitor system data and track overall platform performance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Users', value: '24', change: '+5 this month', color: 'text-green-400' },
          { label: 'Workout Logs', value: '136', change: '+47 this month', color: 'text-blue-400' },
          { label: 'Active Plans', value: '12', change: '50% of users', color: 'text-orange-400' },
          { label: 'Avg. Age', value: '26', change: 'years old', color: 'text-pink-400' },
        ].map((card) => (
          <div key={card.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className={`text-3xl font-extrabold ${card.color}`}>{card.value}</p>
            <p className="text-white text-sm font-semibold mt-1">{card.label}</p>
            <p className="text-gray-500 text-xs mt-1">{card.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* User Growth */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">📈 User Growth</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Line type="monotone" dataKey="users" stroke="#22C55E" strokeWidth={3} dot={{ fill: '#22C55E', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Overview */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">⚡ Platform Activity</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Legend wrapperStyle={{ color: '#9CA3AF', fontSize: '12px' }} />
              <Bar dataKey="workouts" fill="#22C55E" radius={[4, 4, 0, 0]} name="Workouts" />
              <Bar dataKey="logs" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Logs" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Plan Distribution */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 lg:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6">🏋️ Workout Plan Distribution</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={planDistribution} cx="50%" cy="50%" outerRadius={90}
                  dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}>
                  {planDistribution.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip {...tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 shrink-0">
              {planDistribution.map((plan, i) => (
                <div key={plan.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-gray-300 text-sm">{plan.name}</span>
                  <span className="text-white font-bold text-sm ml-auto pl-4">{plan.value} users</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reports