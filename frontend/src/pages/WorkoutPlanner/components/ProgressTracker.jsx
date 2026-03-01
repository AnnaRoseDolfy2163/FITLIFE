import { useState } from 'react'

const initialLogs = [
  { id: 1, date: '2025-01-10', exercise: 'Push Ups', sets: 3, reps: 15, weight: 'Bodyweight', note: 'Felt great!' },
  { id: 2, date: '2025-01-12', exercise: 'Squats', sets: 3, reps: 20, weight: '20kg', note: 'Legs on fire 🔥' },
  { id: 3, date: '2025-01-14', exercise: 'Pull Ups', sets: 3, reps: 8, weight: 'Bodyweight', note: 'Getting stronger' },
]

function ProgressTracker() {
  const [logs, setLogs] = useState(initialLogs)
  const [form, setForm] = useState({ date: '', exercise: '', sets: '', reps: '', weight: '', note: '' })
  const [showForm, setShowForm] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAdd = () => {
    if (!form.date || !form.exercise) return
    setLogs([{ id: Date.now(), ...form }, ...logs])
    setForm({ date: '', exercise: '', sets: '', reps: '', weight: '', note: '' })
    setShowForm(false)
  }

  const handleDelete = (id) => {
    setLogs(logs.filter((log) => log.id !== id))
  }

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Log Your Work</p>
        <h2 className="text-3xl font-extrabold">Progress Tracker 📊</h2>
        <p className="text-gray-400 mt-2">Log your workouts and track your improvement over time</p>
      </div>

      {/* Add Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-full transition"
        >
          {showForm ? '✕ Cancel' : '+ Log Workout'}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-gray-900 border border-green-500 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-green-400">New Workout Log</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { name: 'date', type: 'date', placeholder: 'Date' },
              { name: 'exercise', type: 'text', placeholder: 'Exercise name' },
              { name: 'sets', type: 'number', placeholder: 'Sets' },
              { name: 'reps', type: 'number', placeholder: 'Reps' },
              { name: 'weight', type: 'text', placeholder: 'Weight (e.g. 20kg or Bodyweight)' },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
              />
            ))}
            <input
              type="text"
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Note (optional)"
              className="bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
            />
          </div>
          <button
            onClick={handleAdd}
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition"
          >
            Save Log ✅
          </button>
        </div>
      )}

      {/* Logs Table */}
      <div className="max-w-5xl mx-auto">
        {logs.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="text-4xl mb-4">📋</p>
            <p>No workout logs yet. Start logging your workouts!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-2xl">🏋️</div>
                  <div>
                    <h4 className="text-white font-bold">{log.exercise}</h4>
                    <p className="text-gray-400 text-sm">{log.date}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-gray-300 flex-wrap">
                  <span className="bg-gray-800 px-3 py-1 rounded-full">📋 {log.sets} sets</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full">🔁 {log.reps} reps</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full">⚖️ {log.weight}</span>
                  {log.note && <span className="bg-gray-800 px-3 py-1 rounded-full">💬 {log.note}</span>}
                </div>
                <button
                  onClick={() => handleDelete(log.id)}
                  className="text-red-400 hover:text-red-300 text-sm border border-red-400/30 px-3 py-1 rounded-full transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProgressTracker