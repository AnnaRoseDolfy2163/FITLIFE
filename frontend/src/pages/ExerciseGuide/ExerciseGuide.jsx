import { useState } from 'react'

const categories = [
  { id: 'upper', label: 'Upper Body', emoji: '💪' },
  { id: 'lower', label: 'Lower Body', emoji: '🦵' },
  { id: 'cardio', label: 'Cardio', emoji: '🏃' },
  { id: 'stretching', label: 'Stretching', emoji: '🧘' },
]

const exercises = {
  upper: [
    { name: 'Push Ups', muscle: 'Chest, Triceps, Shoulders', level: 'Beginner', sets: '3 sets x 15 reps', desc: 'A classic bodyweight exercise that strengthens your chest, shoulders, and triceps.', emoji: '🔥' },
    { name: 'Pull Ups', muscle: 'Back, Biceps', level: 'Intermediate', sets: '3 sets x 8 reps', desc: 'An upper body compound exercise that targets your back and biceps.', emoji: '💪' },
    { name: 'Shoulder Press', muscle: 'Shoulders, Triceps', level: 'Intermediate', sets: '3 sets x 12 reps', desc: 'Press weights overhead to build strong, rounded shoulders.', emoji: '🏋️' },
    { name: 'Bicep Curls', muscle: 'Biceps', level: 'Beginner', sets: '3 sets x 12 reps', desc: 'Isolate and strengthen your biceps with controlled curling motion.', emoji: '💪' },
    { name: 'Tricep Dips', muscle: 'Triceps, Chest', level: 'Beginner', sets: '3 sets x 12 reps', desc: 'Use your bodyweight to tone and strengthen the back of your arms.', emoji: '🔥' },
    { name: 'Bent Over Row', muscle: 'Back, Biceps', level: 'Intermediate', sets: '3 sets x 10 reps', desc: 'A powerful compound movement for building a strong, thick back.', emoji: '🏋️' },
  ],
  lower: [
    { name: 'Squats', muscle: 'Quads, Glutes, Hamstrings', level: 'Beginner', sets: '3 sets x 15 reps', desc: 'The king of lower body exercises. Builds strength in your entire lower body.', emoji: '🔥' },
    { name: 'Lunges', muscle: 'Quads, Glutes', level: 'Beginner', sets: '3 sets x 12 reps each leg', desc: 'Step forward and lower your hips to strengthen quads and glutes.', emoji: '🦵' },
    { name: 'Deadlift', muscle: 'Hamstrings, Glutes, Back', level: 'Advanced', sets: '3 sets x 8 reps', desc: 'A full body powerhouse movement targeting your posterior chain.', emoji: '🏋️' },
    { name: 'Glute Bridges', muscle: 'Glutes, Hamstrings', level: 'Beginner', sets: '3 sets x 15 reps', desc: 'Lie on your back and thrust your hips up to activate your glutes.', emoji: '🔥' },
    { name: 'Calf Raises', muscle: 'Calves', level: 'Beginner', sets: '3 sets x 20 reps', desc: 'Rise up on your toes to build strong, defined calves.', emoji: '🦵' },
    { name: 'Leg Press', muscle: 'Quads, Glutes', level: 'Intermediate', sets: '3 sets x 12 reps', desc: 'Push weight away using your legs on the leg press machine.', emoji: '💪' },
  ],
  cardio: [
    { name: 'Jumping Jacks', muscle: 'Full Body', level: 'Beginner', sets: '3 sets x 30 sec', desc: 'A simple full body cardio exercise to get your heart pumping.', emoji: '🏃' },
    { name: 'Burpees', muscle: 'Full Body', level: 'Intermediate', sets: '3 sets x 10 reps', desc: 'A high intensity full body move that burns serious calories.', emoji: '🔥' },
    { name: 'Jump Rope', muscle: 'Calves, Shoulders', level: 'Beginner', sets: '3 sets x 1 min', desc: 'Jump rope to improve coordination, speed, and cardiovascular fitness.', emoji: '🏃' },
    { name: 'High Knees', muscle: 'Core, Legs', level: 'Beginner', sets: '3 sets x 30 sec', desc: 'Run in place bringing your knees up high to boost heart rate.', emoji: '🔥' },
    { name: 'Mountain Climbers', muscle: 'Core, Shoulders', level: 'Intermediate', sets: '3 sets x 30 sec', desc: 'A dynamic plank move that works your core and gets your heart racing.', emoji: '💪' },
    { name: 'Box Jumps', muscle: 'Legs, Glutes', level: 'Advanced', sets: '3 sets x 8 reps', desc: 'Explosive jump onto a box to build power and burn calories fast.', emoji: '🏋️' },
  ],
  stretching: [
    { name: 'Child\'s Pose', muscle: 'Back, Hips', level: 'Beginner', sets: 'Hold 30 sec x 3', desc: 'A relaxing stretch that releases tension in your back and hips.', emoji: '🧘' },
    { name: 'Hip Flexor Stretch', muscle: 'Hip Flexors', level: 'Beginner', sets: 'Hold 30 sec each side', desc: 'Kneel and lunge forward to open up tight hip flexors.', emoji: '🌸' },
    { name: 'Hamstring Stretch', muscle: 'Hamstrings', level: 'Beginner', sets: 'Hold 30 sec each leg', desc: 'Sit and reach for your toes to loosen tight hamstrings.', emoji: '🧘' },
    { name: 'Cat-Cow Stretch', muscle: 'Spine, Core', level: 'Beginner', sets: '3 sets x 10 reps', desc: 'A gentle flowing movement to warm up and mobilize your spine.', emoji: '🌸' },
    { name: 'Shoulder Cross Stretch', muscle: 'Shoulders', level: 'Beginner', sets: 'Hold 20 sec each side', desc: 'Pull your arm across your chest to release tight shoulder muscles.', emoji: '🧘' },
    { name: 'Pigeon Pose', muscle: 'Glutes, Hips', level: 'Intermediate', sets: 'Hold 45 sec each side', desc: 'A deep hip opener that relieves tightness in your glutes and hips.', emoji: '🌸' },
  ],
}

const levelColors = {
  Beginner: 'text-green-400 bg-green-400/10 border-green-400/30',
  Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  Advanced: 'text-red-400 bg-red-400/10 border-red-400/30',
}

function ExerciseGuide() {
  const [activeCategory, setActiveCategory] = useState('upper')
  const [selectedExercise, setSelectedExercise] = useState(null)

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 py-16 px-6 text-center border-b border-gray-800">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">Learn & Train</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Exercise & Muscle Guide 💪</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore exercises by category. Learn proper form, target muscles, and recommended sets for each exercise.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex justify-center gap-4 flex-wrap px-6 py-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition border ${
              activeCategory === cat.id
                ? 'bg-green-500 text-black border-green-500'
                : 'bg-gray-900 text-gray-400 border-gray-700 hover:border-green-500 hover:text-green-400'
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* EXERCISE CARDS */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises[activeCategory].map((exercise) => (
            <div
              key={exercise.name}
              onClick={() => setSelectedExercise(exercise)}
              className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl p-6 cursor-pointer transition group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{exercise.emoji}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColors[exercise.level]}`}>
                  {exercise.level}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-green-400 transition">{exercise.name}</h3>
              <p className="text-green-400 text-sm mb-3">🎯 {exercise.muscle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{exercise.desc}</p>
              <div className="bg-gray-800 rounded-xl px-4 py-2 text-sm text-gray-300">
                📋 {exercise.sets}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL - Exercise Detail */}
      {selectedExercise && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedExercise(null)}
        >
          <div
            className="bg-gray-900 border border-green-500 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <span className="text-5xl">{selectedExercise.emoji}</span>
              <h2 className="text-2xl font-extrabold mt-3 mb-1">{selectedExercise.name}</h2>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColors[selectedExercise.level]}`}>
                {selectedExercise.level}
              </span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-1">🎯 Target Muscles</p>
                <p className="text-white font-semibold">{selectedExercise.muscle}</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-1">📋 Recommended Sets</p>
                <p className="text-white font-semibold">{selectedExercise.sets}</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-gray-400 mb-1">📝 Description</p>
                <p className="text-white">{selectedExercise.desc}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedExercise(null)}
              className="w-full mt-6 bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default ExerciseGuide