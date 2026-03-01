import { useState } from 'react'

const initialContent = [
  { id: 1, type: 'Exercise', title: 'Push Ups', category: 'Upper Body', level: 'Beginner', status: 'Published' },
  { id: 2, type: 'Exercise', title: 'Squats', category: 'Lower Body', level: 'Beginner', status: 'Published' },
  { id: 3, type: 'Exercise', title: 'Burpees', category: 'Cardio', level: 'Intermediate', status: 'Published' },
  { id: 4, type: 'Plan', title: 'Beginner Full Body', category: 'Workout Plan', level: 'Beginner', status: 'Published' },
  { id: 5, type: 'Plan', title: 'Weight Loss Blast', category: 'Workout Plan', level: 'Intermediate', status: 'Published' },
  { id: 6, type: 'Tip', title: 'Hydration Guide', category: 'Nutrition', level: 'All', status: 'Draft' },
  { id: 7, type: 'Tip', title: 'Period Cramp Relief', category: 'Self Care', level: 'All', status: 'Published' },
]

const typeColors = {
  Exercise: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
  Plan: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Tip: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
}

function ManageContent() {
  const [content, setContent] = useState(initialContent)
  const [filter, setFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ type: 'Exercise', title: '', category: '', level: 'Beginner', status: 'Draft' })

  const filtered = filter === 'All' ? content : content.filter((c) => c.type === filter)

  const handleAdd = () => {
    if (!form.title || !form.category) return
    setContent([{ id: Date.now(), ...form }, ...content])
    setForm({ type: 'Exercise', title: '', category: '', level: 'Beginner', status: 'Draft' })
    setShowForm(false)
  }

  const toggleStatus = (id) => {
    setContent(content.map((c) =>
      c.id === id ? { ...c, status: c.status === 'Published' ? 'Draft' : 'Published' } : c
    ))
  }

  const deleteContent = (id) => setContent(content.filter((c) => c.id !== id))

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Content Control</p>
        <h2 className="text-3xl font-extrabold">Manage Fitness Content 📚</h2>
        <p className="text-gray-400 mt-2">Add, edit and manage exercises, plans and tips</p>
      </div>

      {/* Filters & Add Button */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="flex gap-3 flex-wrap">
          {['All', 'Exercise', 'Plan', 'Tip'].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                filter === f
                  ? 'bg-green-500 text-black border-green-500'
                  : 'bg-gray-900 text-gray-400 border-gray-700 hover:border-green-500'
              }`}>
              {f}
            </button>
          ))}
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2 rounded-full text-sm transition">
          {showForm ? '✕ Cancel' : '+ Add Content'}
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-gray-900 border border-green-500 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-bold text-green-400 mb-4">Add New Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition">
              <option value="Exercise">Exercise</option>
              <option value="Plan">Plan</option>
              <option value="Tip">Tip</option>
            </select>
            <input type="text" placeholder="Title" value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            <input type="text" placeholder="Category (e.g. Upper Body)" value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}
              className="bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="All">All Levels</option>
            </select>
          </div>
          <button onClick={handleAdd}
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition">
            Add Content ✅
          </button>
        </div>
      )}

      {/* Content Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-400 uppercase text-xs">
              <tr>
                <th className="px-5 py-4 text-left">Title</th>
                <th className="px-5 py-4 text-left">Type</th>
                <th className="px-5 py-4 text-left">Category</th>
                <th className="px-5 py-4 text-left">Level</th>
                <th className="px-5 py-4 text-left">Status</th>
                <th className="px-5 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-gray-800/50 transition">
                  <td className="px-5 py-4 text-white font-semibold">{item.title}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${typeColors[item.type]}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-300">{item.category}</td>
                  <td className="px-5 py-4 text-gray-300">{item.level}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      item.status === 'Published'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => toggleStatus(item.id)}
                        className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-xs hover:bg-yellow-500/20 transition">
                        Toggle
                      </button>
                      <button onClick={() => deleteContent(item.id)}
                        className="bg-red-500/10 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs hover:bg-red-500/20 transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageContent