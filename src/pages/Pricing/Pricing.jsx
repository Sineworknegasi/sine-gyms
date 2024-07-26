import React from 'react'
import './Pricing.css'
import Header2 from '../../Components/Header/Header2'
import Footer from '../../Components/Footer/Footer'
import Services from '../../Components/Services/Services'

const Pricing_data = [
  {
    day: 'yearly',
    price: '$199 / month'
  },
  {
    day: 'Monthly',
    price: '$229 / month'
  },
  {
    day: 'Personal',
    price: '$399 / month'
  }
].map((item) => {
  return (
    <div className="col-md-4">
              <div className=' Pricing_card d-flex flex-column justify-content-center align-items-center bg-white '>
                <h1 className=' fw-bold'>{item.day}</h1>
                <p className='mb-5'>{item.price}</p>
                <ul className='list-unstyled text-center w-75 '>
                  <li>
                  Unlimited Use
                  </li>
                  <li>
                  Yoga Classes
                  </li>
                  <li>
                  Zumba Classes
                  </li>
                </ul>
                <button className='red_btn'>JOIN NOW</button>
              </div>
            </div>
  )
})

const Pricing = () => {
  return (
    <div>
      <Header2/>
      <div className="container Staff_page">
        <h1 className="Page_title">Princing</h1>
        <h2 className="Page_disc fw-bold fs-4">the perfect plan for you</h2>
        <p className="about_dics">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem, a imperdiet sapien tincidunt at. Vivamus sed libero ut diam feugiat sagittis sit amet in justo.
        </p>
      </div>
      <div className="Princing_Container">
        <div className="container">
          <div className="row">
            {Pricing_data}
          </div>
        </div>
      </div>
      <Services/>
      <Footer />
    </div>
  )
}

export default Pricing
