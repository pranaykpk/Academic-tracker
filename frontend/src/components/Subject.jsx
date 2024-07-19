// import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Card3 from './Card3'
import Navbar from './Navbar'


const Subject = () => {
    const [resources, setResources] = useState([])
    const [unit, setUnit] = useState([])
    const [progress, setProgress] = useState([])
    const [d2, setD2] = useState([])
    const [subInUrl, setSubInUrl] = useState("")
    const params = useParams()
    const subname =params.subjectInfo.toLowerCase().replaceAll(" ","") 
    const info = async () => {
      const syllabus = await fetch("http://localhost:3000/syllabus/"+subname)
      const data = await syllabus.json();
      setUnit(data[0].units)
      setD2(data[0].name)
      let user =localStorage.getItem('username')
      // console.log(user);
      const progressInfo = await fetch(`http://localhost:3000/progress/${user}/${params.subjectInfo.toLowerCase().replaceAll(" ","")}`)
      const prog = await progressInfo.json()
      setProgress(prog[0].subjects[subname])
      setSubInUrl(data[0].inUrl)
      // console.log(progress[0].subjects[subname]["SetTheory"]);
      
    }
    const resource = async()=>{
      if(unit.length>0){
        const response = await fetch(`http://localhost:3000/resources/${subInUrl}`)
      const res = await response.json()
      setResources(res);
      }
    }
    
  
    useEffect(() => {
      info()
      resource()
    }, [])
    
    
    
  return (
    <div className=''>
      <Navbar/>
     <h2 className='text-center my-10 text-5xl font-medium '>{d2}</h2>
     
      {
      unit.map((file)=>{
        
        return <Card3 key={file.no} title={file.name} arr={file.topics} progress={progress} subInUrl={subInUrl} res={resources}/>
      })
    }
    
    </div>
  )
}

export default Subject
