import { useState } from 'react'

const initialUsers = [
  { id: 1, name: 'Sarah Johnson', username: 'sarah_j', email: 'sarah@email.com', gender: 'Female', age: 25, plan: 'Weight Loss Blast', status: 'Active' },
  { id: 2, name: 'Mike Chen', username: 'mike_c', email: 'mike@email.com', gender: 'Male', age: 30, plan: 'Muscle Builder', status: 'Active' },
  { id: 3, name: 'Priya Nair', username: 'priya_n', email: 'priya@email.com', gender: 'Female', age: 22, plan: 'Core & Flexibility', status: 'Active' },
  { id: 4, name: 'James Lee', username: 'james_l', email: 'james@email.com', gender: 'Male', age: 28, plan: 'None', status: 'Inactive' },
  { id: 5, name: 'Aisha Khan', username: 'aisha_k', email: 'aisha@email.com', gender: 'Female', age: 26, plan: "Women's Toning", status: 'Active' },
]

const plans = ['None', 'Beginner Full Body', 'Weight Loss Blast', 'Muscle Builder', 'Core & Flexibility', 'Cardio Endurance', "Women's Toning"]

function ManageUsers() {
  const [users, setUsers] = useState(initialUsers)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [editPlan, setEditPlan] = useState('')

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  const openUser = (user) => {
    setSelected(user)
    setEditPlan(user.plan)
  }

  const saveChanges = () => {
    setUsers(users.map((u) => u.id === selected.id ? { ...u, plan: editPlan } : u))
    setSelected(null)
  }

  const toggleStatus = (id) => {
    setUsers(users.map((u) =>
      u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u
    ))
  }

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id))
    setSelected(null)
  }

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Admin Control</p>
        <h2 className="text-3xl font-extrabold">Manage Users 👥</h2>
        <p className="text-gray-400 mt-2">View, assign plans and manage all registered users</p>
      </div>

      {/* Search */}
      <div className="mb-6 max-w-md">
        <input
          type="text"
          placeholder="🔍 Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition"
        />
      </div>

      {/* Users Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-400 uppercase text-xs">
              <tr>
                <th className="px-5 py-4 text-left">User</th>
                <th className="px-5 py-4 text-left">Gender / Age</th>
                <th className="px-5 py-4 text-left">Assigned Plan</th>
                <th className="px-5 py-4 text-left">Status</th>
                <th className="px-5 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800/50 transition">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center text-black font-extrabold text-sm shrink-0">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{user.name}</p>
                        <p className="text-gray-400 text-xs">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-300">{user.gender} • {user.age}y</td>
                  <td className="px-5 py-4">
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs">
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      user.status === 'Active'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => openUser(user)}
                        className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs hover:bg-green-500/20 transition">
                        Manage
                      </button>
                      <button onClick={() => toggleStatus(user.id)}
                        className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-xs hover:bg-yellow-500/20 transition">
                        Toggle
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}>
          <div className="bg-gray-900 border border-green-500 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center text-black font-extrabold text-xl">
                {selected.name[0]}
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white">{selected.name}</h2>
                <p className="text-gray-400 text-sm">{selected.email}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm mb-6">
              <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
                <span className="text-gray-400">Gender</span>
                <span className="text-white font-semibold">{selected.gender}</span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
                <span className="text-gray-400">Age</span>
                <span className="text-white font-semibold">{selected.age}</span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className={selected.status === 'Active' ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>
                  {selected.status}
                </span>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-2">Assign Workout Plan</p>
                <select value={editPlan} onChange={(e) => setEditPlan(e.target.value)}
                  className="w-full bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none rounded-xl px-4 py-2 text-sm transition">
                  {plans.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <button onClick={saveChanges}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition mb-3">
              Save Changes ✅
            </button>
            <button onClick={() => deleteUser(selected.id)}
              className="w-full bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 font-bold py-3 rounded-xl transition mb-3">
              Delete User 🗑️
            </button>
            <button onClick={() => setSelected(null)}
              className="w-full border border-gray-700 text-gray-400 hover:text-white py-3 rounded-xl transition text-sm">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageUsers