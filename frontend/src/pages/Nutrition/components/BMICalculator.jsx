import { useState } from 'react'

function BMICalculator() {
  const [form, setForm] = useState({ weight: '', height: '', age: '', gender: '' })
  const [result, setResult] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const calculateBMI = () => {
    const { weight, height } = form
    if (!weight || !height) return
    const heightM = parseFloat(height) / 100
    const bmi = (parseFloat(weight) / (heightM * heightM)).toFixed(1)
    let category = ''
    let color = ''
    let advice = ''
    if (bmi < 18.5) {
      category = 'Underweight'; color = 'text-blue-400'
      advice = 'You may need to gain some weight. Focus on nutrient-rich foods and consult a doctor.'
    } else if (bmi < 25) {
      category = 'Normal Weight ✅'; color = 'text-green-400'
      advice = 'Great job! Maintain your current lifestyle with balanced diet and regular exercise.'
    } else if (bmi < 30) {
      category = 'Overweight'; color = 'text-yellow-400'
      advice = 'Consider increasing physical activity and reducing calorie intake gradually.'
    } else {
      category = 'Obese'; color = 'text-red-400'
      advice = 'Please consult a healthcare professional for a personalized weight management plan.'
    }
    setResult({ bmi, category, color, advice })
  }

  const getBMIPosition = (bmi) => {
    const clamped = Math.min(Math.max(bmi, 10), 40)
    return ((clamped - 10) / 30) * 100
  }

  return (
    <div>
      <div className="text-center mb-10">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-2">Know Your Numbers</p>
        <h2 className="text-3xl font-extrabold">BMI Calculator ⚖️</h2>
        <p className="text-gray-400 mt-2">Calculate your Body Mass Index and get personalized advice</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Enter Your Details</h3>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Weight (kg)</label>
              <input type="number" name="weight" value={form.weight} onChange={handleChange}
                placeholder="e.g. 65"
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Height (cm)</label>
              <input type="number" name="height" value={form.height} onChange={handleChange}
                placeholder="e.g. 165"
                className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-1 block">Age</label>
                <input type="number" name="age" value={form.age} onChange={handleChange}
                  placeholder="e.g. 25"
                  className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition" />
              </div>
              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-1 block">Gender</label>
                <select name="gender" value={form.gender} onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none rounded-xl px-4 py-3 text-sm transition">
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <button onClick={calculateBMI}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition">
              Calculate BMI ⚖️
            </button>
          </div>
        </div>

        {/* Result */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-center">
          {!result ? (
            <div className="text-center text-gray-500">
              <p className="text-5xl mb-4">⚖️</p>
              <p>Enter your details and click Calculate to see your BMI result</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Your BMI</p>
              <p className={`text-6xl font-extrabold mb-2 ${result.color}`}>{result.bmi}</p>
              <p className={`text-xl font-bold mb-6 ${result.color}`}>{result.category}</p>

              {/* BMI Scale */}
              <div className="mb-6">
                <div className="relative h-4 rounded-full overflow-hidden mb-2"
                  style={{ background: 'linear-gradient(to right, #3B82F6, #22C55E, #EAB308, #EF4444)' }}>
                  <div className="absolute top-0 w-3 h-4 bg-white rounded-full shadow-lg transition-all duration-700"
                    style={{ left: `calc(${getBMIPosition(result.bmi)}% - 6px)` }} />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 text-left">
                <p className="text-gray-400 text-sm mb-1">💡 Advice</p>
                <p className="text-white text-sm leading-relaxed">{result.advice}</p>
              </div>

              {/* BMI Table */}
              <div className="mt-4 bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-3">BMI Categories</p>
                <div className="space-y-1 text-xs">
                  {[
                    { range: 'Below 18.5', label: 'Underweight', color: 'text-blue-400' },
                    { range: '18.5 – 24.9', label: 'Normal', color: 'text-green-400' },
                    { range: '25 – 29.9', label: 'Overweight', color: 'text-yellow-400' },
                    { range: '30 and above', label: 'Obese', color: 'text-red-400' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="text-gray-400">{row.range}</span>
                      <span className={`font-semibold ${row.color}`}>{row.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BMICalculator