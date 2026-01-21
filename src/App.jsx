import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './components/ProjectDetail'
import ScrollToTop from './components/ScrollToTop'
import ScrollToHash from './components/ScrollToHash'

function App() {

  return (

    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path='/project/:slug' element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
