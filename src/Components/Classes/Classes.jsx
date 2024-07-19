import React from "react";
import "./Classes.css";
import { FaDotCircle } from "react-icons/fa";

const Classes = () => {
  return (
    <section className="Classes_section">
      <div className="row w-100 h-100">
        <div className=" col-md-4 col-sm-12 Our-Packages p-3 px-5 bglayer">
          <h2>Our Packages</h2>
          <ul>
            <li className=" d-flex justify-content-between">
              <span className="w-50">Weight Loose</span>
              <span className="w-50">:$250 / month</span>
            </li>
            <li className=" d-flex justify-content-between">
              <span className="w-50">Personal Training</span>
              <span className="w-50">:$250 / month</span>
            </li>
            <li className=" d-flex justify-content-between">
              <span className="w-50">Group Training</span>
              <span className="w-50">:$250 / month</span>
            </li>
            <li className=" d-flex justify-content-between">
              <span className="w-50"> Weight Loose </span>
              <span className="w-50">:$250 / month</span>
            </li>
          </ul>
          <button className="black_btn">PRICING</button>
        </div>
        <div className=" col-md-4 col-sm-12 p-3 Our-Classes">
          <h2>Our Classes</h2>
          <ul className="list-unstyled text-white">
            <li>
              {" "}
              <span className="">
                <img
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/running.png"
                  alt=""
                />
              </span>{" "}
              <span className="m-3">Running</span>
            </li>
            <li>
              {" "}
              <span className=" ">
                <img
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/body-building.png"
                  alt=""
                />
              </span>
              <span className="m-3">Body Building</span>
            </li>
            <li>
              {" "}
              <span className=" ">
                <img
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/kick-boxing.png"
                  alt=""
                />
              </span>
              <span className="m-3">Kick Boxing</span>
            </li>
            <li>
              {" "}
              <span className="">
                <img
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/yoga.png"
                  alt=""
                />
              </span>
              <span className="m-3">Yoga</span>
            </li>
          </ul>
          <div className="owl-dots d-flex gap-1 mx-3 z-2">
            <span className="owl-dot active">
                <FaDotCircle/>
            </span>
            <span className="owl-dot">
            <FaDotCircle/>
            </span>
            <span className="owl-dot">
            <FaDotCircle/>
            </span>
            <span className="owl-dot">
            <FaDotCircle/>
            </span>
          </div>
          <button className="black_btn">VIEW CLASSES</button>
        </div>
        <div className=" col-md-4 col-sm-12 p-3 Our-Facility  bglayer">
          <h2>Our Classes</h2>
          <ul className="list-unstyled text-white">
            <li>
              {" "}
              <span className="">
                <img
                     className="Custom_icon"
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/trainer.png"
                  alt=""
                />
              </span>{" "}
              <span className="m-3">Best Trainer</span>
            </li>
            <li>
              {" "}
              <span className=" ">
                <img
                     className="Custom_icon"
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/timing.png"
                  alt=""
                />
              </span>
              <span className="m-3">Flexible timing</span>
            </li>
            <li>
              {" "}
              <span className=" ">
                <img
                     className="Custom_icon"
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/cardio.png"
                  alt=""
                />
              </span>
              <span className="m-3">Cardio Programs</span>
            </li>
            <li>
              {" "}
              <span className="">
                <img
                     className="Custom_icon"
                  src="https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/physiotherapist.png"
                  alt=""
                />
              </span>
              <span className="m-3">Physiotherapist</span>
            </li>
          </ul>
          <div className="owl-dots d-flex gap-1 mx-3 z-2 position-relative">
            <span className="owl-dot active">
                <FaDotCircle/>
            </span>
            <span className="owl-dot">
            <FaDotCircle/>
            </span>
            <span className="owl-dot">
            <FaDotCircle/>
            </span>
            <span className="owl-dot">
            <FaDotCircle/>
            </span>
          </div>
          <button className="black_btn mt-2">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
