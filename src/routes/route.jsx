import About from '@/Pages/About'
import Home from '@/Pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default AppRoutes