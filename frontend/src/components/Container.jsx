// import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react'

const Container = () => {
  const [more, setMore] = useState(false)
 
  
  
  return (
    <div className='bg-slate-900 w-[80vw] min-h-[80vh] ml-36 my-3 py-3 rounded-xl'>
      <h2 className='text-center text-2xl  ' > Academic Tracker </h2>
      <Card more={more} setMore={setMore}/>
    </div>
  )
}

export default Container
