import { useState } from 'react'
import SelfCareTips from './components/SelfCareTips'
import PeriodTracker from './components/PeriodTracker'
import CrampRelief from './components/CrampRelief'

const tabs = [
  { id: 'tips', label: 'Self Care Tips', emoji: '✨' },
  { id: 'tracker', label: 'Period Tracker', emoji: '🌸' },
  { id: 'cramps', label: 'Cramp Relief', emoji: '💆' },
]

function SelfCare() {
  const [activeTab, setActiveTab] = useState('tips')

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 py-16 px-6 text-center border-b border-gray-800">
        <p className="text-pink-400 uppercase tracking-widest text-sm font-semibold mb-3">Love Yourself</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Self Care & Period Care 🌸</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your wellbeing matters. Explore self care tips, track your cycle, and find natural cramp relief.
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
                ? 'bg-pink-500 text-white border-pink-500'
                : 'bg-gray-900 text-gray-400 border-gray-700 hover:border-pink-500 hover:text-pink-400'
            }`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {activeTab === 'tips' && <SelfCareTips />}
        {activeTab === 'tracker' && <PeriodTracker />}
        {activeTab === 'cramps' && <CrampRelief />}
      </div>

    </div>
  )
}

export default SelfCare