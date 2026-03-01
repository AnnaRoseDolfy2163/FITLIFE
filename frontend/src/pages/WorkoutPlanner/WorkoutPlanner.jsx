import { useState } from 'react'
import WorkoutPlans from './components/WorkoutPlans'
import ProgressTracker from './components/ProgressTracker'
import ProgressChart from './components/ProgressChart'

const tabs = [
  { id: 'plans', label: 'Workout Plans', emoji: '🏋️' },
  { id: 'tracker', label: 'Track Progress', emoji: '📋' },
  { id: 'charts', label: 'Progress Charts', emoji: '📈' },
]

function WorkoutPlanner() {
  const [activeTab, setActiveTab] = useState('plans')

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 py-16 px-6 text-center border-b border-gray-800">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">Train Smart</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Workout Planner 📋</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose your workout plan, log your sessions, and watch your progress grow with beautiful charts.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-4 flex-wrap px-6 py-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition border ${
              activeTab === tab.id
                ? 'bg-green-500 text-black border-green-500'
                : 'bg-gray-900 text-gray-400 border-gray-700 hover:border-green-500 hover:text-green-400'
            }`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {activeTab === 'plans' && <WorkoutPlans />}
        {activeTab === 'tracker' && <ProgressTracker />}
        {activeTab === 'charts' && <ProgressChart />}
      </div>

    </div>
  )
}

export default WorkoutPlanner