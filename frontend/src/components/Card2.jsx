// import {useState} from 'react'
// import {v4 as uuidv4} from "uuid"
import { Link } from 'react-router-dom';

const Card2 = (props) => {
    // const [more, setMore] = useState(false);
    const loca ="/subject/"
  return (
    <Link to={loca+props.title}>
      <div className='card2 select-none border-2 border-white w-[74%] ml-48 my-3 min-h-16 flex justify-between items-center px-4 transition rounded-lg  hover:bg-slate-800'>
      <h1 className='text-xl font-semibold'>{props.title}</h1>
      
    </div>
    
    </Link>
  )
}

export default Card2
