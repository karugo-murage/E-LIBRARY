import React from 'react'

export default function contact() {
  return (
    <div>
        <h1 className='hear'>We'd Love to Hear From You</h1>
        <div className='feedback'>
            <p className='free'>Fell free to share your feedback</p>
            <form >
                <input className='input_contact' type="text" placeholder="Enter your name" required/><br/> 
                <input className='input_contact' type="text" placeholder="Enter your email" required/> <br/>
                <input className='input_contact' type="text" placeholder="Subject" required/><br/>
                <textarea  className='input_contact' name="" id="" cols="30" rows="10" placeholder="Message" required>  </textarea> <br/>
                <button className='input_send' > Send</button>
            </form>
        </div>
    </div>
  )
}