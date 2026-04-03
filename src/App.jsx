import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
    <Courses />
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