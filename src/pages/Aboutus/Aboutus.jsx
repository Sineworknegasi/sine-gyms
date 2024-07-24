import React from "react";
import "./Aboutus.css";
import Header from "../../Components/Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import { FaCheck } from "react-icons/fa6";
import Header2 from "../../Components/Header/Header2";

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <div className="slick-prev">Previous</div>,
    nextArrow: <div className="slick-next">Next</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Aboutus = () => {
  const images = [
    "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/about-us/about-us-carousel-1.jpg",
    "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/about-us/about-us-carousel-2.jpg",
    "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/about-us/about-us-carousel-3.jpg",
    "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/about-us/about-us-carousel-4.jpg",
    "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/about-us/about-us-carousel-5.jpg",
    "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/about-us/about-us-carousel-6.jpg",
  ];
  return (
    <>
      <section className="About_page section_gap2 ">
      <Header2/>
        <div className="About_content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="Page_title">About us</h1>
                <h2 className="Page_dics">Challenge yourself today</h2>
                <p className="about_dics">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean aliquet laoreet lorem, a imperdiet sapien tincidunt at.
                  Vivamus sed libero ut diam feugiat sagittis sit amet in justo.
                  Nam quis massa nec lorem tempus egestas at quis eros. Morbi
                  non augue vel tortor feugiat commodo vitae sed dolor. Maecenas
                  a nisi euismod, bibendum arcu quis, posuere massa. Morbi
                  mattis dui sem. Phasellus vel rhoncus ligula
                </p>
                <p className="mt-4 about_dics_2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean aliquet laoreet lorem, a imperdiet sapien tincidunt at.
                  Vivamus sed libero ut diam feugiat sagittis sit amet in justo.
                  Nam quis massa nec lorem tempus egestas at quis eros. Morbi
                  non augue vel tortor feugiat commodo vitae sed dolor. Maecenas
                  a nisi euismod, bibendum arcu quis, posuere massa. Morbi
                  mattis dui sem. Phasellus vel rhoncus ligula.
                </p>
              </div>
              <div className="col-md-3">
                <div className="">
                  <div className="join_form">
                    <h3>Try us out!</h3>
                    <p>Get a free 5 day VIP guest pass</p>
                    <input type="text" placeholder=" Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Your Phone" />
                    <button type="submit" className="black_btn w-100 fs-6">Join Now!</button>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
          <div className="whyus">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                <h1>Why us?</h1>
                <div className="row">
                <div className="col-md-6 left_disc">
                  <ul>
                    <li><FaCheck/> Fitness Consultation</li>
                    <li><FaCheck/> Professionals</li>
                    <li><FaCheck/> Zumba</li>
                    <li><FaCheck/> Nutrition</li>
                    <li><FaCheck/> TRX</li>
                  </ul>
                </div>
                <div className="col-md-6 right_disc">
                  <ul>
                    <li><FaCheck/> Conditioning</li>
                    <li><FaCheck/> Sports</li>
                    <li><FaCheck/> Consultation</li>
                    <li><FaCheck/> Spin</li>
                    <li><FaCheck/> Full Cardio</li>
                  </ul>
                </div>
              </div>
                </div>
              </div>
             
            </div>
          <ImageSlider images={images} />
          <Services/>
          <Footer/>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
