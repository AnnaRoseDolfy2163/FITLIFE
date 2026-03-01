const diets = [
  {
    title: 'Weight Loss Diet',
    emoji: '🔥',
    goal: 'Lose Weight',
    color: 'border-orange-500/30 hover:border-orange-500',
    accent: 'text-orange-400',
    calories: '1200–1500 kcal/day',
    desc: 'A calorie-deficit diet focused on whole foods, lean proteins, and vegetables to help you lose weight sustainably.',
    foods: ['Grilled Chicken', 'Leafy Greens', 'Eggs', 'Greek Yogurt', 'Berries', 'Oats'],
    avoid: ['Sugary Drinks', 'Fried Foods', 'White Bread', 'Processed Snacks'],
    meals: [
      { time: 'Breakfast', meal: 'Oatmeal with berries and a boiled egg' },
      { time: 'Lunch', meal: 'Grilled chicken salad with olive oil dressing' },
      { time: 'Snack', meal: 'Greek yogurt with a handful of almonds' },
      { time: 'Dinner', meal: 'Steamed fish with roasted vegetables' },
    ]
  },
  {
    title: 'Muscle Building Diet',
    emoji: '💪',
    goal: 'Build Muscle',
    color: 'border-blue-500/30 hover:border-blue-500',
    accent: 'text-blue-400',
    calories: '2500–3000 kcal/day',
    desc: 'A high-protein, calorie-surplus diet designed to fuel workouts and support muscle growth and recovery.',
    foods: ['Chicken Breast', 'Brown Rice', 'Eggs', 'Salmon', 'Sweet Potato', 'Cottage Cheese'],
    avoid: ['Alcohol', 'Sugary Foods', 'Trans Fats', 'Excessive Caffeine'],
    meals: [
      { time: 'Breakfast', meal: 'Scrambled eggs with whole grain toast and banana' },
      { time: 'Lunch', meal: 'Grilled chicken with brown rice and broccoli' },
      { time: 'Snack', meal: 'Protein shake with peanut butter' },
      { time: 'Dinner', meal: 'Salmon with sweet potato and asparagus' },
    ]
  },
  {
    title: 'Balanced Healthy Diet',
    emoji: '🥗',
    goal: 'Stay Healthy',
    color: 'border-green-500/30 hover:border-green-500',
    accent: 'text-green-400',
    calories: '1800–2200 kcal/day',
    desc: 'A well-rounded diet with all macronutrients in balance. Perfect for maintaining weight and overall health.',
    foods: ['Whole Grains', 'Lean Proteins', 'Fresh Fruits', 'Vegetables', 'Nuts', 'Legumes'],
    avoid: ['Ultra-Processed Foods', 'Excessive Sugar', 'Excess Sodium'],
    meals: [
      { time: 'Breakfast', meal: 'Whole grain toast with avocado and poached eggs' },
      { time: 'Lunch', meal: 'Lentil soup with a side salad and whole grain bread' },
      { time: 'Snack', meal: 'Mixed fruits and a handful of walnuts' },
      { time: 'Dinner', meal: 'Stir-fried tofu with vegetables and quinoa' },
    ]
  },
  {
    title: 'Energy Boost Diet',
    emoji: '⚡',
    goal: 'Boost Energy',
    color: 'border-yellow-500/30 hover:border-yellow-500',
    accent: 'text-yellow-400',
    calories: '2000–2400 kcal/day',
    desc: 'A diet rich in complex carbs, iron, and B vitamins to keep your energy levels high throughout the day.',
    foods: ['Bananas', 'Oats', 'Spinach', 'Nuts & Seeds', 'Dark Chocolate', 'Whole Grains'],
    avoid: ['Sugar Crashes', 'Skipping Meals', 'Excessive Alcohol', 'Heavy Fatty Foods'],
    meals: [
      { time: 'Breakfast', meal: 'Banana smoothie with oats, spinach and almond milk' },
      { time: 'Lunch', meal: 'Whole grain pasta with lean turkey and tomato sauce' },
      { time: 'Snack', meal: 'A handful of mixed nuts and dark chocolate' },
      { time: 'Dinner', meal: 'Baked chicken with quinoa and steamed spinach' },
    ]
  },
]

function DietSuggestions() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Eat Smart</p>
        <h2 className="text-3xl font-extrabold">Diet Suggestions 🥗</h2>
        <p className="text-gray-400 mt-2">Choose a diet plan that matches your fitness goal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {diets.map((diet) => (
          <div
            key={diet.title}
            onClick={() => setSelected(diet)}
            className={`bg-gray-900 border rounded-2xl p-6 cursor-pointer transition group ${diet.color}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">{diet.emoji}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 ${diet.accent}`}>
                {diet.calories}
              </span>
            </div>
            <h3 className={`text-xl font-bold mb-1 group-hover:${diet.accent} transition`}>{diet.title}</h3>
            <p className={`text-sm mb-3 ${diet.accent}`}>🎯 {diet.goal}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{diet.desc}</p>
            <div className="flex flex-wrap gap-2">
              {diet.foods.slice(0, 4).map((food) => (
                <span key={food} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{food}</span>
              ))}
              {diet.foods.length > 4 && (
                <span className="bg-gray-800 text-gray-500 text-xs px-3 py-1 rounded-full">+{diet.foods.length - 4} more</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-8 overflow-y-auto"
          onClick={() => setSelected(null)}>
          <div className="bg-gray-900 border border-green-500 rounded-3xl p-8 max-w-lg w-full shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <span className="text-5xl">{selected.emoji}</span>
              <h2 className="text-2xl font-extrabold mt-3 mb-1">{selected.title}</h2>
              <p className={`text-sm ${selected.accent}`}>{selected.calories}</p>
            </div>
            <div className="space-y-4 text-sm">
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-2">✅ Recommended Foods</p>
                <div className="flex flex-wrap gap-2">
                  {selected.foods.map((f) => (
                    <span key={f} className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs">{f}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-2">❌ Foods to Avoid</p>
                <div className="flex flex-wrap gap-2">
                  {selected.avoid.map((f) => (
                    <span key={f} className="bg-red-500/10 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs">{f}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-3">🍽️ Sample Meal Plan</p>
                <div className="space-y-2">
                  {selected.meals.map((m) => (
                    <div key={m.time} className="flex gap-3">
                      <span className="text-green-400 font-semibold w-20 shrink-0">{m.time}</span>
                      <span className="text-gray-300">{m.meal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => setSelected(null)}
              className="w-full mt-6 bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
export default DietSuggestions