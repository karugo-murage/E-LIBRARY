import React, {useState} from 'react'

export default function Exam() {
  let ai= require ('../Images/ai.jpg') 
  let calculus= require ('../Images/calculus.jpg') 
  let dataCom= require ('../Images/datacom.jpg') 
  let digitalElec= require ('../Images/digitalelec.jpg') 

  const [active, setActive] = useState( dataCom);
  return (
    <>
     <div>
    <button className='button' onClick ={()=>setActive(ai)}>A.I</button>
    <button className='button' onClick ={()=>setActive(calculus)}>Calculus</button>
    <button className='button' onClick ={()=>setActive(digitalElec)}>Electronics</button>
    <button className='button' onClick ={()=>setActive(dataCom)}  >Data_Com</button>
    </div>
    <div>
        { active === digitalElec && <img src={digitalElec}default height={500} width={500} />}
        { active === dataCom&& <img src={dataCom}default height={500} width={500} />}
        { active === calculus && <img src={calculus}default height={500} width={500} />}
        { active === ai && <img src={ai}default height={500} width={500} />}
        
    </div>
    </>
    
   
  )
}