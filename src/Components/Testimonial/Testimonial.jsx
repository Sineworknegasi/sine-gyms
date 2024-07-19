import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section className=' Testimonial_section '>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-8">
                    <div className='Testimonial_card'>
                        <p className=' testimonial_comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor ex, pellentesque a congue id, dapibus ac ante. Nam vel ipsum maximus, lacinia dui at, feugiat nibh. In pulvinar arcu diam, non ultricies risus blandit non. Aenean vel sapien.</p>
                        <div className='Testimonial_name'>
                            <h5>Judy jackson</h5>
                            <span>Boxer</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className=' img-fluid' src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/testimonial/testimonial-woman-1.jpg " alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
