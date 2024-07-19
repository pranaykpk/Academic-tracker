import { useEffect, useState } from "react"
import { NavLink, useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const [isLogin,setIsLogin] = useState(false);

  const handleLogout = async ()=>{
    await localStorage.removeItem('username');
    navigate("/login", { replace: true })
  }

  useEffect(()=>{
    let token = localStorage.getItem('username');
    if(token){
      setIsLogin(true)
    }
  },[])

  return (
    <nav className='bg-slate-950 text-white p-2 flex justify-around items-center relative'>
        <ul className="flex gap-3">
            <NavLink className={(e)=>e.isActive?"text-slate-900 bg-white px-2  rounded-md font-semibold":""}  to="/app">Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink to="/pomodoro">Pomodoro</NavLink>
        </ul>
        <ul className="flex gap-4">
        {
          isLogin ? <></> : <NavLink className="px-3 rounded-xl bg-white text-slate-900 " to="/register">Register</NavLink>
        }
        {
          isLogin ? <NavLink onClick={handleLogout} className="px-3 rounded-xl bg-white text-slate-900" >Logout</NavLink>
          :
          <NavLink className="px-3 rounded-xl bg-white text-slate-900" to="/login">Login</NavLink>
        }
        </ul>
    </nav>
  )
}

export default Navbar
