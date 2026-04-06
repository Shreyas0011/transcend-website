import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Lazy Loading Components for better Performance
const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Courses = lazy(() => import('./components/Courses'))
const Stats = lazy(() => import('./components/Stats'))
const Vision = lazy(() => import('./components/Vision'))
const FounderMessage = lazy(() => import('./components/FounderMessage'))
const LeadershipMessages = lazy(() => import('./components/LeadershipMessages'))
const BeyondAcademics = lazy(() => import('./components/BeyondAcademics'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Facilities = lazy(() => import('./components/Facilities'))
const Footer = lazy(() => import('./components/Footer'))
const AboutDetail = lazy(() => import('./components/AboutDetail'))
const CourseDetail = lazy(() => import('./components/CourseDetail'))
const BComHolisticDetail = lazy(() => import('./components/BComHolisticDetail'))
const BComProfessionalDetail = lazy(() => import('./components/BComProfessionalDetail'))
const BComEveningDetail = lazy(() => import('./components/BComEveningDetail'))
const BComCADetail = lazy(() => import('./components/BComCADetail'))
const BComACCADetail = lazy(() => import('./components/BComACCADetail'))
const BComUSCMADetail = lazy(() => import('./components/BComUSCMADetail'))
const BBADetail = lazy(() => import('./components/BBADetail'))
const OurTeam = lazy(() => import('./components/OurTeam'))
const Differentiators = lazy(() => import('./components/Differentiators'))
const FloatingElements = lazy(() => import('./components/FloatingElements'))
const FacilitiesDetail = lazy(() => import('./components/FacilitiesDetail'))
const Careers = lazy(() => import('./components/Careers'))
const CustomCursor = lazy(() => import('./components/CustomCursor'))
const SmoothScroll = lazy(() => import('./components/SmoothScroll'))

const Home = () => (
  <main className="relative z-10 flex-grow">
    <Hero />
    <About />
    <Vision />
    <FounderMessage />
    <LeadershipMessages />
    {/* Programs now has its own page for better focus */}
    <div className="py-20 flex justify-center bg-white">
        <Link 
            to="/programs" 
            className="group flex items-center gap-4 px-10 py-5 rounded-[2rem] bg-[#2d3e91] text-white font-black text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(45,62,145,0.3)]"
        >
            Explore Our Programs
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4-4 4M3 12h18" />
            </svg>
        </Link>
    </div>
    <Stats />
    <BeyondAcademics />
    <Testimonials />
    <Facilities />
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-white text-gray-900 flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] font-bold text-[#2d3e91]">Loading...</div>}>
          {/* Smooth Scrolling */}
          <SmoothScroll />

          {/* Custom creative cursor */}
          <CustomCursor />

          {/* Floating background elements */}
          <FloatingElements />

          {/* Navbar */}
          <Navbar />

          {/* Page sections */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Courses />} />
            <Route path="/about-detail" element={<AboutDetail />} />
            <Route path="/course-detail" element={<CourseDetail />} />
            <Route path="/bcom-holistic" element={<BComHolisticDetail />} />
            <Route path="/bcom-professional" element={<BComProfessionalDetail />} />
            <Route path="/bcom-ca" element={<BComCADetail />} />
            <Route path="/acca" element={<BComACCADetail />} />
            <Route path="/us-cma" element={<BComUSCMADetail />} />
            <Route path="/bcom-evening" element={<BComEveningDetail />} />
            <Route path="/bba" element={<BBADetail />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/differentiators" element={<Differentiators />} />
            <Route path="/facilities" element={<FacilitiesDetail />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>



          {/* Footer */}
          <Footer />
        </Suspense>
      </div>
    </Router>
  )
}

export default App