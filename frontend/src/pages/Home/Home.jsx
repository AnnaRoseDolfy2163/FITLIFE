import { Link } from 'react-router-dom'
import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaClipboardList, FaUserShield, FaSpa } from 'react-icons/fa'

function Home() {
  return (
    <div className="bg-gray-950 text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-4">Your Personal Fitness Companion</p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Transform Your <br />
          <span className="text-green-400">Body & Mind</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          FitLife gives you personalized workout plans, nutrition guidance, self care tips, and progress tracking — all in one place.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/register" className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-full text-lg transition">
            Get Started Free
          </Link>
          <Link to="/exercise-guide" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold px-8 py-3 rounded-full text-lg transition">
            Explore Exercises
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-20 flex gap-12 flex-wrap justify-center text-center">
          <div>
            <p className="text-4xl font-extrabold text-green-400">500+</p>
            <p className="text-gray-400 text-sm mt-1">Exercises</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-green-400">50+</p>
            <p className="text-gray-400 text-sm mt-1">Workout Plans</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-green-400">1000+</p>
            <p className="text-gray-400 text-sm mt-1">Happy Users</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-green-400">24/7</p>
            <p className="text-gray-400 text-sm mt-1">Access</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">About FitLife</p>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              More Than Just a <span className="text-green-400">Fitness App</span>
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              FitLife was built to be your all-in-one health companion. Whether you're a beginner just starting out or someone looking to level up their fitness journey, FitLife has everything you need.
            </p>
            <p className="text-gray-400 text-lg mb-6">
              Our expert trainers create tailored workout plans just for you. Track your progress, take care of your body, eat right, and feel your best — every single day.
            </p>
            <Link to="/register" className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-full transition">
              Join FitLife Today
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { icon: '💪', label: 'Personalized Plans' },
              { icon: '📊', label: 'Progress Tracking' },
              { icon: '🥗', label: 'Nutrition Guidance' },
              { icon: '🌸', label: 'Self Care Support' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700 hover:border-green-500 transition">
                <p className="text-4xl mb-3">{item.icon}</p>
                <p className="text-white font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">What We Offer</p>
          <h2 className="text-4xl font-extrabold">Everything You Need to <span className="text-green-400">Succeed</span></h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaDumbbell className="text-green-400 text-3xl" />,
              title: 'Exercise & Muscle Guide',
              desc: 'Explore upper body, lower body, cardio, and stretching exercises with detailed muscle guides.',
              link: '/exercise-guide'
            },
            {
              icon: <FaClipboardList className="text-green-400 text-3xl" />,
              title: 'Workout Planner',
              desc: 'Get tailored workout plans from our expert trainers and track your progress with charts.',
              link: '/workout-planner'
            },
            {
              icon: <FaSpa className="text-green-400 text-3xl" />,
              title: 'Self Care & Period Care',
              desc: 'Access self care tips, period tracking, and cramp relief guidance all in one place.',
              link: '/self-care'
            },
            {
              icon: <FaAppleAlt className="text-green-400 text-3xl" />,
              title: 'Nutrition & Diet',
              desc: 'Get personalized diet suggestions, hydration tips, and calculate your BMI easily.',
              link: '/nutrition'
            },
            {
              icon: <FaHeartbeat className="text-green-400 text-3xl" />,
              title: 'Progress Tracking',
              desc: 'Visualize your fitness journey with beautiful progress charts and milestone tracking.',
              link: '/workout-planner'
            },
            {
              icon: <FaUserShield className="text-green-400 text-3xl" />,
              title: 'Expert Admin Support',
              desc: 'Our admin and trainers manage your content, monitor your progress, and keep you on track.',
              link: '/admin'
            },
          ].map((feature) => (
            <Link to={feature.link} key={feature.title}
              className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl p-8 transition group">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-24 px-6 bg-green-500 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          Ready to Start Your <br /> Fitness Journey?
        </h2>
        <p className="text-green-900 text-lg mb-10 max-w-xl mx-auto">
          Join thousands of users already transforming their lives with FitLife. It's free to get started!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/register" className="bg-black text-green-400 font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-900 transition">
            Create Free Account
          </Link>
          <Link to="/login" className="border-2 border-black text-black font-bold px-8 py-3 rounded-full text-lg hover:bg-green-400 transition">
            Login
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-500 text-center py-8 text-sm">
        <p>© 2026 FitLife. Built with 💚 for a healthier you.</p>
      </footer>

    </div>
  )
}

export default Home