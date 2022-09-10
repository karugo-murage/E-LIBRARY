import React from 'react'

export default function About() {
  return (
    <div>
        <h1 className='about_us'>About Us Page</h1>
        <div>
            <section className='mission_vision'>
              <div className='mission_container'>
                <p className='mission'>Mission statement</p>
                <p>We foster our students’ love for learning, by giving providing learning assistance. </p>
              </div>
              <div className='mission_container'>
                <p className='mission'>Vision statement</p>
                <p> To develop well rounded, confident and responsible individuals who aspire to achieve their full potential.</p>
              </div>
            </section>
            <section className='image_values' >
                <div>
                    <img src={"https://st.depositphotos.com/1011643/2013/i/950/depositphotos_20130635-stock-photo-group-of-african-college-students.jpg"}default height={300} width={360} />
                </div>
                <div className='vision_container'>
                    <p className='vision'>Core values.</p>
                    <ul>
                        <li> INTEGRITY</li>
                        <li> COMPETENCY </li>
                        <li> HONESTY</li>
                        <li> DISCIPLINE</li>
                        <li> COMMITMENT</li>
                    </ul>
                </div>
            </section>

        </div>
    </div>
  )
}