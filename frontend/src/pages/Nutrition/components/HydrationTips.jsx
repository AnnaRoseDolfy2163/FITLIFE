import { useState } from 'react'

const tips = [
  { emoji: '💧', title: 'Start Your Day with Water', desc: 'Drink a glass of water first thing in the morning to kickstart your metabolism and rehydrate after sleep.' },
  { emoji: '⏰', title: 'Drink Before Every Meal', desc: 'Have a glass of water 30 minutes before meals. It aids digestion and helps prevent overeating.' },
  { emoji: '📱', title: 'Set Hydration Reminders', desc: 'Use your phone to set reminders every 1–2 hours. Consistency is key to staying hydrated throughout the day.' },
  { emoji: '🍋', title: 'Infuse Your Water', desc: 'Add lemon, cucumber, or mint to your water for flavor. It makes drinking water more enjoyable.' },
  { emoji: '🏃', title: 'Hydrate Before & After Exercise', desc: 'Drink 500ml before working out and replenish lost fluids after. Dehydration reduces performance by up to 25%.' },
  { emoji: '🌡️', title: 'Drink More in Hot Weather', desc: 'In hot or humid weather, increase your intake. You lose more water through sweat than you realize.' },
]

const signs = [
  { sign: 'Dark yellow urine', meaning: 'You need more water NOW', color: 'text-red-400' },
  { sign: 'Light yellow urine', meaning: 'Well hydrated ✅', color: 'text-green-400' },
  { sign: 'Headache', meaning: 'Could be dehydration', color: 'text-yellow-400' },
  { sign: 'Fatigue', meaning: 'Often a sign of low hydration', color: 'text-yellow-400' },
  { sign: 'Dry lips & skin', meaning: 'Drink more water', color: 'text-orange-400' },
  { sign: 'Difficulty concentrating', meaning: 'Brain needs water too!', color: 'text-blue-400' },
]

function HydrationTips() {
  const [weight, setWeight] = useState('')
  const [waterGoal, setWaterGoal] = useState(null)
  const [glasses, setGlasses] = useState(0)

  const calculateWater = () => {
    if (!weight) return
    const liters = (parseFloat(weight) * 0.033).toFixed(1)
    setWaterGoal(liters)
    setGlasses(0)
  }

  const dailyGoalGlasses = waterGoal ? Math.ceil((waterGoal * 1000) / 250) : 8
  const percentage = Math.min((glasses / dailyGoalGlasses) * 100, 100).toFixed(0)

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-2">Stay Hydrated</p>
        <h2 className="text-3xl font-extrabold">Hydration Tips 💧</h2>
        <p className="text-gray-400 mt-2">Water is life — learn how to stay properly hydrated every day</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Water Intake Tracker */}
        <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-blue-400 mb-6">💧 Daily Water Tracker</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 w-full">
              <label className="text-gray-400 text-sm mb-1 block">Your Weight (kg)</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 60"
                  className="flex-1 bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
                />
                <button onClick={calculateWater}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-5 py-3 rounded-xl transition text-sm">
                  Calculate
                </button>
              </div>
              {waterGoal && (
                <p className="text-blue-400 text-sm mt-2">Your daily goal: <span className="font-bold text-white">{waterGoal}L ({dailyGoalGlasses} glasses)</span></p>
              )}
            </div>
            <div className="flex-1 w-full text-center">
              <p className="text-gray-400 text-sm mb-3">Glasses drunk today</p>
              <div className="flex items-center justify-center gap-4">
                <button onClick={() => setGlasses(Math.max(0, glasses - 1))}
                  className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full text-xl transition">−</button>
                <div>
                  <p className="text-4xl font-extrabold text-blue-400">{glasses}</p>
                  <p className="text-gray-500 text-xs">/ {dailyGoalGlasses} glasses</p>
                </div>
                <button onClick={() => setGlasses(glasses + 1)}
                  className="bg-blue-500 hover:bg-blue-400 text-white w-10 h-10 rounded-full text-xl transition">+</button>
              </div>
              {/* Progress bar */}
              <div className="mt-4 bg-gray-800 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }} />
              </div>
              <p className="text-blue-400 text-sm mt-1">{percentage}% of daily goal</p>
            </div>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <div key={tip.title} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-5 transition">
              <p className="text-3xl mb-3">{tip.emoji}</p>
              <h4 className="text-white font-bold text-sm mb-2">{tip.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>

        {/* Dehydration Signs */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-5">⚠️ Signs of Dehydration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {signs.map((s) => (
              <div key={s.sign} className="bg-gray-800 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-gray-300 text-sm">{s.sign}</span>
                <span className={`text-xs font-semibold ${s.color}`}>{s.meaning}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default HydrationTips