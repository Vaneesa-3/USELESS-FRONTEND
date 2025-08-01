import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import '@fontsource/press-start-2p';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          
        </Routes>
        
      </div>
      
    </>
  )
}

export default App
