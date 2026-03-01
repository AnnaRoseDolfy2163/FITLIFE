import { useState } from 'react'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

function PeriodTracker() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [periodDays, setPeriodDays] = useState([])
  const [lastPeriod, setLastPeriod] = useState('')
  const [cycleLength, setCycleLength] = useState(28)
  const [nextPeriod, setNextPeriod] = useState(null)

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate()
  const getFirstDay = (month, year) => new Date(year, month, 1).getDay()

  const toggleDay = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    setPeriodDays((prev) =>
      prev.includes(dateStr) ? prev.filter((d) => d !== dateStr) : [...prev, dateStr]
    )
  }

  const isDayMarked = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return periodDays.includes(dateStr)
  }

  const isToday = (day) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
  }

  const calculateNext = () => {
    if (!lastPeriod) return
    const last = new Date(lastPeriod)
    const next = new Date(last)
    next.setDate(last.getDate() + parseInt(cycleLength))
    setNextPeriod(next.toDateString())
  }

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1) }
    else setCurrentMonth(currentMonth - 1)
  }

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1) }
    else setCurrentMonth(currentMonth + 1)
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDay(currentMonth, currentYear)

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-pink-400 uppercase tracking-widest text-sm font-semibold mb-2">Know Your Cycle</p>
        <h2 className="text-3xl font-extrabold">Period Tracker 🌸</h2>
        <p className="text-gray-400 mt-2">Track your cycle and predict your next period</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Calendar */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <button onClick={prevMonth} className="text-gray-400 hover:text-white text-xl px-2">‹</button>
            <h3 className="text-lg font-bold text-white">{monthNames[currentMonth]} {currentYear}</h3>
            <button onClick={nextMonth} className="text-gray-400 hover:text-white text-xl px-2">›</button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <div key={d} className="text-center text-gray-500 text-xs font-semibold py-1">{d}</div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {Array(firstDay).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
            {Array(daysInMonth).fill(null).map((_, i) => {
              const day = i + 1
              const marked = isDayMarked(day)
              const todayDay = isToday(day)
              return (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`aspect-square rounded-full text-sm font-semibold transition flex items-center justify-center
                    ${marked ? 'bg-pink-500 text-white' : todayDay ? 'border-2 border-green-500 text-green-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  {day}
                </button>
              )
            })}
          </div>

          <p className="text-gray-500 text-xs text-center mt-4">Click on days to mark your period 🩸</p>
        </div>

        {/* Prediction */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-5">
          <h3 className="text-lg font-bold text-white">Predict Next Period 🔮</h3>

          <div>
            <label className="text-gray-400 text-sm mb-1 block">Last Period Start Date</label>
            <input
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-700 focus:border-pink-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-1 block">Average Cycle Length (days)</label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              min="21" max="35"
              className="w-full bg-gray-800 text-white border border-gray-700 focus:border-pink-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
            />
          </div>

          <button
            onClick={calculateNext}
            className="w-full bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 rounded-xl transition"
          >
            Calculate Next Period 🌸
          </button>

          {nextPeriod && (
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-sm mb-1">Your next period is expected on</p>
              <p className="text-pink-400 text-xl font-extrabold">{nextPeriod}</p>
            </div>
          )}

          {/* Marked days count */}
          {periodDays.length > 0 && (
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-sm mb-1">Days marked this month</p>
              <p className="text-white text-2xl font-extrabold">{periodDays.length} days 🩸</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default PeriodTracker