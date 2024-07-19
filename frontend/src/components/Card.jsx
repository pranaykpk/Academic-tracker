// import { useState } from 'react'
import Card2 from './Card2'
import { v4 as uuidv4 } from 'uuid';

const Card = ({more,setMore}) => {
    
    const subjects = ["DISCRETE MATHEMATICS", "BUSINESS ECONOMICS AND FINANCIAL ANALYSIS", "OPERATING SYSTEMS", "DATABASE MANAGEMENT SYSTEMS", "SOFTWARE ENGINEERING" ]
    return (
        <div className="main">
            <div className='card select-none border-2 border-white w-5/6 m-auto my-3 min-h-20 flex justify-between items-center px-4 rounded-lg hover:bg-slate-800' onClick={() => { setMore(!more) }}>
                <h1 className='text-xl font-semibold'> 2-2 B.Tech R22 REGULATION</h1>
                <button onClick={() => { setMore(!more) }} className='font-semibold text-4xl'>{more ? <span className="material-symbols-outlined">remove</span>: <span className="material-symbols-outlined">add</span>}</button>
           </div >
           <ul >
            {more && subjects.map((subject) => {
                    return (
                        <Card2 key={uuidv4()} title={subject} />
                    )
                })}
                </ul>
        </div>
    )
}

export default Card
// "OPERATING SYSTEMS LAB", "DATABASE MANAGEMENT SYSTEMS LAB", "CONSTITUTION OF INDIA", "SKILL DEVELOPMENT COURSE (NODE JS/ REACT JS/ DJANGO)"