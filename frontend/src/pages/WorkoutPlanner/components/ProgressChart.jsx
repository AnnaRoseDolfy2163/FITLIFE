import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts'

const weeklyData = [
  { week: 'Week 1', workouts: 2, calories: 400 },
  { week: 'Week 2', workouts: 3, calories: 620 },
  { week: 'Week 3', workouts: 3, calories: 580 },
  { week: 'Week 4', workouts: 4, calories: 750 },
  { week: 'Week 5', workouts: 5, calories: 900 },
  { week: 'Week 6', workouts: 4, calories: 820 },
]

const strengthData = [
  { week: 'Week 1', pushups: 10, squats: 15 },
  { week: 'Week 2', pushups: 12, squats: 18 },
  { week: 'Week 3', pushups: 15, squats: 20 },
  { week: 'Week 4', pushups: 18, squats: 25 },
  { week: 'Week 5', pushups: 20, squats: 28 },
  { week: 'Week 6', pushups: 25, squats: 32 },
]

function ProgressChart() {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Visualize Growth</p>
        <h2 className="text-3xl font-extrabold">Progress Charts 📈</h2>
        <p className="text-gray-400 mt-2">See how far you've come with your fitness journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Workouts Per Week */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-6 text-white">Workouts Per Week 🏋️</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="week" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="workouts" fill="#22C55E" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Calories Burned */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-6 text-white">Calories Burned 🔥</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="week" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="calories" stroke="#22C55E" strokeWidth={3} dot={{ fill: '#22C55E', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Strength Progress */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 lg:col-span-2">
          <h3 className="text-lg font-bold mb-6 text-white">Strength Progress 💪</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={strengthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="week" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#9CA3AF' }} />
              <Line type="monotone" dataKey="pushups" stroke="#22C55E" strokeWidth={3} dot={{ fill: '#22C55E', r: 5 }} name="Push Ups" />
              <Line type="monotone" dataKey="squats" stroke="#86EFAC" strokeWidth={3} dot={{ fill: '#86EFAC', r: 5 }} name="Squats" />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}

export default ProgressChart