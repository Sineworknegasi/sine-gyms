import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='About_section section_gap'>
        <div className="container text-center d-flex flex-column align-items-center">
            <h2 className='text-center py-2'><span>Get Up!</span> Challenge Yourself today</h2>
            <p className='text-center fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed sem ipsum. Proin efficitur dolor accumsan purus varius tempus nec a <br /> nulla. Aliquam id vulputate massa, a rhoncus justo. Nunc luctus non ipsum a cursus. Donec laoreet iaculis egestas. Nulla finibus sed <br /> ipsum a pretium. Mauris ut nisl nec metus.</p>
            <a href="" className='red_btn text-center'>About Gym</a>
        </div>
    </section>
  )
}

export default About