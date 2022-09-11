//import React from 'react'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Comment() {
  const [data, setData] = useState([])
  const [print, setPrint] = useState(false)
  const [latest, setLatest]=useState('')
  function getData(e){
    setLatest(e.target.value)
  }

  function Api(){
    let quote = fetch('http://localhost:9292/view_comment');
   quote.then(response=>response.json()).then(data => {
    setData(data)
   console.log(data); 
  })
 .catch(err => console.error(err));
 }
 function handleSubmit(e){
  e.preventDefault()
  axios.post('http://localhost:9292/new_comment',{message:latest}) 
  .then(res=>Api())
  .catch(err => console.error(err))


}

 useEffect(() => { 
  Api();
 },[]);

 let message = data.map((c,index)=><p>{c.message}</p>)

  return (
    <>
    <div className='posts-section' >
      {
        data?
        message
        :null

      }
    </div>
    <div className='comments' >
      <form onSubmit={handleSubmit}>
        <input className='comment-box' type="text" onChange={getData} placeholder="Enter your comments" ></input>
        <button className='comment-post'type='submit' >POST</button>
      </form>
    </div>
    </>
  )
}
// function handleFormSubmit(e) {
//   e.preventDefault();

//   fetch(`http://localhost:4000/messages/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       body: messageBody,
//     }),
//   })
//     .then((r) => r.json())
//     .then((updatedMessage) => onUpdateMessage(updatedMessage));
// }