// import React from 'react'
import { useState } from "react"
import Card4 from "./Card4"
import {v4 as uuidv4} from 'uuid'

const Card3 = (props) => {
  const [more, setMore] = useState(false)
  const topicName = props.title.replaceAll(" ",'').replaceAll("&","and")
  // console.log(topicName);
  // console.log(props.progress[topicName]);
  // const [width, setWidth] = useState(props.progress[topicName.toLowerCase()].length/ props.arr.length)
  // console.log(props.progress[topicName.toLowerCase()].length/ props.arr.length);
  
  return (
    <div className="card3 select-none w-full h-full items-center gap-4 px-4 " >
      <div className='border-2 border-white w-[74%] ml-48 my-3 pt-2 min-h-16   px-4 transition-all rounded-lg  hover:bg-slate-800 ' onClick={()=>{setMore(!more)}  }>
      <h1 className='text-xl font-semibold'>{props.title}</h1>
      
          </div>
      <ul className="relative">
      {more && props.arr.map((file)=>{
        return <Card4 key={uuidv4()} file={file} progressArr={props.progress} subInUrl={props.subInUrl} progressUnit={topicName} />
      })
      }
      {/* <div className='h-1 rounded-lg  w-[74%] absolute  bottom-[14px] left-[205px]' >
        <div className={`h-full bg-orange-500 rounded-lg `}></div>
      </div> */}
      </ul>
    </div>
  )
}
//w-${width}
export default Card3
