const remedies = [
  {
    category: 'Heat Therapy',
    emoji: '🔥',
    color: 'border-orange-500/30 hover:border-orange-500',
    accent: 'text-orange-400',
    tips: [
      { title: 'Heating Pad', desc: 'Apply a heating pad to your lower abdomen for 15–20 minutes. Heat relaxes the uterine muscles and reduces cramping.' },
      { title: 'Warm Bath', desc: 'Soaking in a warm bath for 20 minutes helps relax your whole body and eases cramp pain significantly.' },
      { title: 'Warm Compress', desc: 'A warm towel or water bottle wrapped in a cloth works just as well as a heating pad in a pinch.' },
    ]
  },
  {
    category: 'Gentle Movement',
    emoji: '🧘',
    color: 'border-purple-500/30 hover:border-purple-500',
    accent: 'text-purple-400',
    tips: [
      { title: 'Child\'s Pose', desc: 'Kneel and stretch your arms forward on the floor. This gentle stretch relieves lower back and abdominal tension.' },
      { title: 'Cat-Cow Stretch', desc: 'On all fours, alternate between arching and rounding your back. This massages the abdominal organs and eases cramps.' },
      { title: 'Light Walking', desc: 'A gentle 10–15 minute walk increases blood flow and releases endorphins, your body\'s natural pain relievers.' },
    ]
  },
  {
    category: 'Diet & Hydration',
    emoji: '🥗',
    color: 'border-green-500/30 hover:border-green-500',
    accent: 'text-green-400',
    tips: [
      { title: 'Stay Hydrated', desc: 'Drink plenty of water. Dehydration can worsen cramps. Warm herbal teas like chamomile or ginger are especially soothing.' },
      { title: 'Anti-Inflammatory Foods', desc: 'Eat foods rich in omega-3s like salmon, walnuts, and flaxseeds. These reduce inflammation and ease period pain.' },
      { title: 'Avoid Caffeine & Salt', desc: 'Caffeine constricts blood vessels and can worsen cramps. High-sodium foods increase bloating and discomfort.' },
    ]
  },
  {
    category: 'Relaxation',
    emoji: '💆',
    color: 'border-blue-500/30 hover:border-blue-500',
    accent: 'text-blue-400',
    tips: [
      { title: 'Abdominal Massage', desc: 'Gently massage your lower abdomen in circular motions with lavender or clary sage essential oil for relief.' },
      { title: 'Deep Breathing', desc: 'Practice slow, deep belly breathing to activate the parasympathetic nervous system and reduce pain perception.' },
      { title: 'Rest & Sleep', desc: 'Don\'t push through the pain. Rest when you need to. Quality sleep helps your body recover and manage pain better.' },
    ]
  },
]

function CrampRelief() {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-pink-400 uppercase tracking-widest text-sm font-semibold mb-2">Feel Better Naturally</p>
        <h2 className="text-3xl font-extrabold">Cramp Relief Tips 💆</h2>
        <p className="text-gray-400 mt-2">Natural remedies to help you feel comfortable during your period</p>
      </div>

      {/* Info Banner */}
      <div className="max-w-3xl mx-auto mb-10 bg-pink-500/10 border border-pink-500/30 rounded-2xl p-5 text-center">
        <p className="text-pink-300 text-sm leading-relaxed">
          💕 Remember — period pain is normal but shouldn't be debilitating. If your cramps are severe, please consult a healthcare professional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {remedies.map((section) => (
          <div key={section.category} className={`bg-gray-900 border rounded-2xl p-6 transition ${section.color}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{section.emoji}</span>
              <h3 className={`text-xl font-bold ${section.accent}`}>{section.category}</h3>
            </div>
            <div className="space-y-4">
              {section.tips.map((tip) => (
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

export default CrampRelief