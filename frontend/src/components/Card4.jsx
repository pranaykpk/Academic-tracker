import React, { useMemo, useRef } from 'react'
import { useState,useEffect } from 'react'

const Card4 = (props) => {
    const ref1 = useRef()
    // const index = progressArr.indexOf(progressArr[props.file])
    const unitName = props.progressUnit.replaceAll(" ",'').replaceAll("&","and").toLowerCase()
    const topicName = props.file.replaceAll(" ",'').replaceAll("&","and").toLowerCase()
    const subInUrl = props.subInUrl;
    const [progressArr, setProgressArr] = useState(props.progressArr[unitName])
    // const index = progressArr.includes(unitName);
    // console.log(props);
    const isCompleted =progressArr.includes(topicName);
    // console.log(progressArr,unitName,props.progressArr[unitName],topicName);
    
    const [check, setCheck] = useState(isCompleted)
    const user = localStorage.getItem("username")
    // console.log(progressArr[unitName]);
    // console.log(progressArr[props.file]); this gives array that of topics that are completed
  
    

    const handleCheckbox =async ()=>{
        if(check == false){
            const resp = await fetch(`http://localhost:3000/addTopic/${user}/${subInUrl}/${unitName}`,{
            method:"POST",
            body:JSON.stringify({topic:topicName}),
            headers: {
              "Content-Type": "application/json",
            }
          })
          // console.log(resp);
          
          
          setCheck(true)
        }
        else if(check == true){
          const resp = await fetch(`http://localhost:3000/progressdelete/${user}/${subInUrl}/${unitName}`,{
            method:"POST",
            body:JSON.stringify({topic:topicName}),
            headers: {
              "Content-Type": "application/json",
          }
          })
          // console.log(resp);
          setCheck(false)
        }

        
    }
    
  return (
    <div className="card4 flex select-none w-full h-full items-center gap-4 px-4 relative"  >
      <div  className={`${check ? 'bg-green-600' : 'hover:bg-slate-800'} border-2 border-white w-[74%] ml-48 my-3 min-h-16 flex gap-5 items-center px-4 transition rounded-lg `} onClick={handleCheckbox}> 
    <input type="checkbox" className='w-[2.5rem]'  name="checks" value={props.file} checked={check} onChange={handleCheckbox} />
      <h1 className='text-xl font-semibold'>{props.file}</h1>
      
      
    </div>
    
    </div>
  )
}

export default Card4
