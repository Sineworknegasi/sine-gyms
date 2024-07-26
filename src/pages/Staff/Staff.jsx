import React from 'react'
import './Staff.css'
import Header2 from '../../Components/Header/Header2'
import Footer from '../../Components/Footer/Footer'

const Staff_members = [
  {
    name: 'Jessica Doe',
    role: 'Personal Trainer',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-1.jpg'
  },{
    name: 'Barbara Doe',
    role: 'Nutritionist',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-2.jpg'
  },
  {
    name: 'Monica Doe',
    role: 'Gym Manager',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-3.jpg'
  },
  {
    name: 'Rachael Doe',
    role: 'Yoga Instructor',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-4.jpg'
  },
  {
    name: 'Angelina Doe',
    role: 'Cardio Instructor',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-5.jpg'
  },
  {
    name: 'Judy Doe',
    role: 'Massager',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-6.jpg'
  },
  {
    name: 'Bob Doe',
    role: 'Athlete',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-7.jpg'
  },
  {
    name: 'John Doe',
    role: 'Trainer',
    image: 'https://www.okler.net/previews/porto/10.2.0/img/demos/gym/staff/staff-8.jpg'
  }
].map((item) => {
  return (
    <div className=" col-lg-3 col-md-6 col-sm-6 position-relative class_card">
      <span className="class_img">
      <img
        src={item.image}
        alt=""
        className=" img-fluid"
      />
      </span>
      <div className="Staff_card">
        <h5 className="Staff_title fw-bold mt-3">{item.name}</h5>
        <p className="Staff_pg">
          {item.role}
        </p>
      </div>
      <div className="Staff_btn">
        <a href="#" className="red_btn">
          LEARN MORE
        </a>
      </div>
    </div>
  )
})

const Staff = () => {
  return (
    <div>
      <Header2 />
      <div className="container Staff_page">
        <h1 className="Page_title">Staff</h1>
        <h2 className="Page_disc fw-bold fs-4">Real pros</h2>
        <p className="about_dics">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem, a imperdiet sapien tincidunt at. Vivamus sed libero ut diam feugiat sagittis sit amet in justo.
        </p>
      </div>
      <div className="Classes_Container">
        <div className="container">
          <div className="row">
            {Staff_members}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Staff