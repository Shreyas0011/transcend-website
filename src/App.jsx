import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Stats from './components/Stats'
import Vision from './components/Vision'
import FounderMessage from './components/FounderMessage'
import LeadershipMessages from './components/LeadershipMessages'
import BeyondAcademics from './components/BeyondAcademics'
import Testimonials from './components/Testimonials'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import AboutDetail from './components/AboutDetail'
import CourseDetail from './components/CourseDetail'
import BComHolisticDetail from './components/BComHolisticDetail'
import BComProfessionalDetail from './components/BComProfessionalDetail'
import BComEveningDetail from './components/BComEveningDetail'
import BBADetail from './components/BBADetail'
import StudentDetails from './components/StudentDetails'
import BComStudentDetails from './components/BComStudentDetails'
import StudentResume from './components/StudentResume'
import OurTeam from './components/OurTeam'
import Differentiators from './components/Differentiators'
import FloatingElements from './components/FloatingElements'
import FacilitiesDetail from './components/FacilitiesDetail'
import ChairmansOffice from './components/ChairmansOffice'
import IQAC from './components/IQAC'
import Careers from './components/Careers'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'



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
        {/* Smooth Scrolling */}
        <SmoothScroll />

        {/* Intro Preloader */}


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
          <Route path="/bcom-evening" element={<BComEveningDetail />} />
          <Route path="/bba" element={<BBADetail />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path="/bcom-students" element={<BComStudentDetails />} />
          <Route path="/student-resume" element={<StudentResume />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/differentiators" element={<Differentiators />} />
          <Route path="/facilities" element={<FacilitiesDetail />} />
          <Route path="/chairmans-office" element={<ChairmansOffice />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App