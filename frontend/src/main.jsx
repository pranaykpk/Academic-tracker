import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Subject from './components/Subject.jsx'
import ReactDOM from 'react-dom/client'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Pomodoro from './components/Pomodora.jsx'


// const router = createBrowserRouter([
//   {
//     path:"/subject/:subjectInfo",
//     element:<><Navbar/><Subject/></>
//   },
//   {
//     path:"/",
//     element:<Login/>
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   },
//   {
//     path:"/register",
//     element:<Register/>
//   },
//   {
//     path:"/app",
//     element:<App/>
//   },
//   {
//     path:"/pomodoro",
//     element:<><Navbar/><Pomodoro/></>
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
     
  </React.StrictMode>,
)
