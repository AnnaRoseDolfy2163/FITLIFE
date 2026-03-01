const tips = [
  {
    category: 'Sleep',
    emoji: '😴',
    color: 'border-purple-500/30 hover:border-purple-500',
    accent: 'text-purple-400',
    items: [
      { title: 'Stick to a Sleep Schedule', desc: 'Go to bed and wake up at the same time every day, even on weekends. This regulates your body clock.' },
      { title: 'Create a Bedtime Routine', desc: 'Wind down 30 minutes before bed. Read, stretch, or meditate — avoid screens.' },
      { title: 'Keep Your Room Cool & Dark', desc: 'The ideal sleep temperature is 65–68°F. Use blackout curtains for deeper sleep.' },
    ]
  },
  {
    category: 'Mental Health',
    emoji: '🧠',
    color: 'border-blue-500/30 hover:border-blue-500',
    accent: 'text-blue-400',
    items: [
      { title: 'Practice Mindfulness Daily', desc: 'Spend 5–10 minutes focusing on your breath. It reduces stress and improves focus.' },
      { title: 'Journal Your Thoughts', desc: 'Writing down your feelings helps process emotions and reduces anxiety.' },
      { title: 'Set Healthy Boundaries', desc: 'Learn to say no. Protecting your energy is not selfish — it\'s necessary.' },
    ]
  },
  {
    category: 'Skin Care',
    emoji: '✨',
    color: 'border-yellow-500/30 hover:border-yellow-500',
    accent: 'text-yellow-400',
    items: [
      { title: 'Cleanse Twice Daily', desc: 'Wash your face in the morning and night to remove dirt, oil, and makeup.' },
      { title: 'Always Use Sunscreen', desc: 'Apply SPF 30+ every morning, even on cloudy days. It\'s the #1 anti-aging tip.' },
      { title: 'Stay Hydrated', desc: 'Drink at least 8 glasses of water daily. Hydrated skin is healthy, glowing skin.' },
    ]
  },
  {
    category: 'Stress Relief',
    emoji: '🌿',
    color: 'border-green-500/30 hover:border-green-500',
    accent: 'text-green-400',
    items: [
      { title: 'Exercise Regularly', desc: 'Even a 20-minute walk releases endorphins that naturally reduce stress.' },
      { title: 'Deep Breathing', desc: 'Try the 4-7-8 method: inhale for 4s, hold for 7s, exhale for 8s.' },
      { title: 'Spend Time in Nature', desc: 'Even 10 minutes outside can lower cortisol levels and improve your mood.' },
    ]
  },
]

function SelfCareTips() {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-pink-400 uppercase tracking-widest text-sm font-semibold mb-2">Take Care of You</p>
        <h2 className="text-3xl font-extrabold">Self Care Tips ✨</h2>
        <p className="text-gray-400 mt-2">Simple daily habits that make a big difference in how you feel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tips.map((section) => (
          <div key={section.category} className={`bg-gray-900 border rounded-2xl p-6 transition ${section.color}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{section.emoji}</span>
              <h3 className={`text-xl font-bold ${section.accent}`}>{section.category}</h3>
            </div>
            <div className="space-y-4">
              {section.items.map((tip) => (
                <div key={tip.title} className="bg-gray-800 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-1">{tip.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelfCareTips