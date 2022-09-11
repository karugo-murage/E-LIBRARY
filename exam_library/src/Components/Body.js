import React from 'react'
import Quotes from './Quotes'
import Theme from './Theme'
import Experience from './Experience'
import Comment from './Comment'
import Exam from './Exam'

export default function Body() {
  return (
    <div className='body'>
      <div>
      <Theme/>
      <Quotes/>
      <Experience/>
      <Comment/>
      </div>
      <div className='body-exam' ><Exam/></div>
    </div>
  )
}