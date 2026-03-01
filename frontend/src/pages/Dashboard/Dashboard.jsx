import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const features = [
  {
    title: 'Exercise & Muscle Guide',
    desc: 'Explore upper body, lower body, cardio and stretching exercises',
    emoji: '💪',
    link: '/exercise-guide',
    color: 'border-orange-500/30 hover:border-orange-500',
    accent: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    title: 'Workout Planner',
    desc: 'Get tailored workout plans and track your progress with charts',
    emoji: '📋',
    link: '/workout-planner',
    color: 'border-blue-500/30 hover:border-blue-500',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Self Care & Period Care',
    desc: 'Self care tips, period tracker and cramp relief guidance',
    emoji: '🌸',
    link: '/self-care',
    color: 'border-pink-500/30 hover:border-pink-500',
    accent: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  {
    title: 'Nutrition & Diet',
    desc: 'Diet suggestions, hydration tips and BMI calculator',
    emoji: '🥗',
    link: '/nutrition',
    color: 'border-green-500/30 hover:border-green-500',
    accent: 'text-green-400',
    bg: 'bg-green-500/10',
  },
]

const tips = [
  '💧 Drink at least 8 glasses of water today!',
  '🧘 Take a 5-minute stretch break every hour.',
  '🥗 Include a vegetable in every meal today.',
  '😴 Aim for 7–8 hours of sleep tonight.',
  '🏃 Even a 20-minute walk counts as exercise!',
  '💪 Consistency beats intensity. Show up every day.',
]

function Dashboard() {
  const { user } = useAuth()
  const [tip, setTip] = useState('')
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    // Random daily tip
    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    setTip(randomTip)

    // Time-based greeting
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good Morning')
    else if (hour < 17) setGreeting('Good Afternoon')
    else setGreeting('Good Evening')
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border-b border-gray-800 px-6 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Greeting */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">
                {greeting} 👋
              </p>
              <h1 className="text-4xl font-extrabold mb-2">
                Welcome back, <span className="text-green-400">{user?.full_name || user?.username}!</span>
              </h1>
              <p className="text-gray-400">Ready to crush your fitness goals today?</p>
            </div>

            {/* Profile Card */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl px-6 py-4 flex items-center gap-4 shrink-0">
              <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center text-2xl font-extrabold text-black">
                {(user?.full_name || user?.username || 'U')[0].toUpperCase()}
              </div>
              <div>
                <p className="text-white font-bold">{user?.full_name || user?.username}</p>
                <p className="text-gray-400 text-sm">{user?.email || 'FitLife Member'}</p>
                <p className="text-green-400 text-xs mt-1">
                  {user?.gender && `${user.gender}`} {user?.age && `• Age ${user.age}`}
                </p>
              </div>
            </div>
          </div>

          {/* Daily Tip Banner */}
          {tip && (
            <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-2xl px-6 py-4 flex items-center gap-4">
              <span className="text-2xl shrink-0">🌟</span>
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-1">Daily Tip</p>
                <p className="text-white text-sm">{tip}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Workouts Done', value: '0', emoji: '🏋️' },
            { label: 'Calories Burned', value: '0', emoji: '🔥' },
            { label: 'Days Active', value: '1', emoji: '📅' },
            { label: 'Current Plan', value: 'None', emoji: '📋' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center">
              <p className="text-3xl mb-2">{stat.emoji}</p>
              <p className="text-2xl font-extrabold text-green-400">{stat.value}</p>
              <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* FEATURES GRID */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-2">What would you like to do? 🚀</h2>
          <p className="text-gray-400 text-sm mb-8">Pick a module to get started</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Link
                to={feature.link}
                key={feature.title}
                className={`bg-gray-900 border rounded-2xl p-6 transition group ${feature.color}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 ${feature.bg}`}>
                  {feature.emoji}
                </div>
                <h3 className={`text-xl font-bold mb-2 group-hover:${feature.accent} transition`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.desc}</p>
                <span className={`text-sm font-semibold ${feature.accent}`}>
                  Explore → 
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* MOTIVATION SECTION */}
        <div className="mt-12 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-center">
          <p className="text-4xl mb-4">🏆</p>
          <h3 className="text-2xl font-extrabold text-black mb-2">You're on Day 1 of Your Journey!</h3>
          <p className="text-green-900 mb-6">Every expert was once a beginner. Keep going!</p>
          <Link
            to="/workout-planner"
            className="bg-black text-green-400 font-bold px-6 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Start Your First Workout 💪
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Dashboard