import { useState } from 'react'

const plans = [
  {
    id: 1,
    title: 'Beginner Full Body',
    level: 'Beginner',
    duration: '4 Weeks',
    days: '3 days/week',
    goal: 'Build Foundation',
    emoji: '🌱',
    exercises: ['Push Ups', 'Squats', 'Lunges', 'Plank', 'Jumping Jacks'],
  },
  {
    id: 2,
    title: 'Weight Loss Blast',
    level: 'Intermediate',
    duration: '6 Weeks',
    days: '5 days/week',
    goal: 'Lose Weight',
    emoji: '🔥',
    exercises: ['Burpees', 'High Knees', 'Mountain Climbers', 'Jump Rope', 'Box Jumps'],
  },
  {
    id: 3,
    title: 'Muscle Builder',
    level: 'Advanced',
    duration: '8 Weeks',
    days: '5 days/week',
    goal: 'Build Muscle',
    emoji: '💪',
    exercises: ['Deadlift', 'Bench Press', 'Pull Ups', 'Shoulder Press', 'Bent Over Row'],
  },
  {
    id: 4,
    title: 'Core & Flexibility',
    level: 'Beginner',
    duration: '3 Weeks',
    days: '4 days/week',
    goal: 'Core Strength',
    emoji: '🧘',
    exercises: ['Plank', 'Cat-Cow Stretch', 'Child\'s Pose', 'Glute Bridges', 'Hip Flexor Stretch'],
  },
  {
    id: 5,
    title: 'Cardio Endurance',
    level: 'Intermediate',
    duration: '5 Weeks',
    days: '4 days/week',
    goal: 'Boost Stamina',
    emoji: '🏃',
    exercises: ['Running', 'Cycling', 'Jump Rope', 'Jumping Jacks', 'High Knees'],
  },
  {
    id: 6,
    title: 'Women\'s Toning',
    level: 'Beginner',
    duration: '6 Weeks',
    days: '4 days/week',
    goal: 'Tone & Strengthen',
    emoji: '🌸',
    exercises: ['Squats', 'Glute Bridges', 'Lunges', 'Calf Raises', 'Shoulder Press'],
  },
]

const levelColors = {
  Beginner: 'text-green-400 bg-green-400/10 border-green-400/30',
  Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  Advanced: 'text-red-400 bg-red-400/10 border-red-400/30',
}

function WorkoutPlans() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Choose Your Plan</p>
        <h2 className="text-3xl font-extrabold">Workout Plans 🏋️</h2>
        <p className="text-gray-400 mt-2">Select a plan that matches your goal and fitness level</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelected(plan)}
            className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl p-6 cursor-pointer transition group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">{plan.emoji}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColors[plan.level]}`}>
                {plan.level}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-green-400 transition">{plan.title}</h3>
            <p className="text-green-400 text-sm mb-4">🎯 {plan.goal}</p>
            <div className="flex gap-3 text-xs text-gray-400">
              <span className="bg-gray-800 px-3 py-1 rounded-full">⏱ {plan.duration}</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">📅 {plan.days}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 border border-green-500 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <span className="text-5xl">{selected.emoji}</span>
              <h2 className="text-2xl font-extrabold mt-3 mb-1">{selected.title}</h2>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColors[selected.level]}`}>
                {selected.level}
              </span>
            </div>
            <div className="space-y-3 text-sm mb-6">
              <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
                <span className="text-gray-400">🎯 Goal</span>
                <span className="text-white font-semibold">{selected.goal}</span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
                <span className="text-gray-400">⏱ Duration</span>
                <span className="text-white font-semibold">{selected.duration}</span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
                <span className="text-gray-400">📅 Frequency</span>
                <span className="text-white font-semibold">{selected.days}</span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-2">🏋️ Exercises</p>
                <div className="flex flex-wrap gap-2">
                  {selected.exercises.map((ex) => (
                    <span key={ex} className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition mb-3">
              Start This Plan 🚀
            </button>
            <button
              onClick={() => setSelected(null)}
              className="w-full border border-gray-700 text-gray-400 hover:text-white py-3 rounded-xl transition text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkoutPlans