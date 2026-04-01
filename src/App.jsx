import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import FSAEProject from './pages/FSAEProject.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/fsae-steering" element={<FSAEProject />} />
    </Routes>
  )
}
