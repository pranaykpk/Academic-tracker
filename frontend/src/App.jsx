import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Pomodora from './components/Pomodora'
import Subject from './components/Subject'
import Register from './components/Register'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.Fragment>
          <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
      <Route path="/app" element={<Home/>} />
      <Route path="/pomodoro" element={<Pomodora />} />
      <Route path="/subject/:subjectInfo" element={<Subject />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </React.Fragment>

  )
}

export default App
