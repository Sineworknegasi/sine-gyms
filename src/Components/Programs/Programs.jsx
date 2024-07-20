import React from "react";
import "./Programs.css";
import { FaDotCircle } from "react-icons/fa";

const Programs = () => {
  const backgrounds = [
    {
      background:
        'url("https://www.okler.net/previews/porto/10.2.0/img/demos/gym/carousels/resources.jpg)',
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    {
      background:
        'url("https://www.okler.net/previews/porto/10.2.0/img/demos/gym/carousels/working-hour.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    {
      background:
        'url("https://scontent.cdninstagram.com/v/t51.2885-15/15801901_191845547950755_2462619486000250880_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=6tnqFHk6AtIQ7kNvgGCGEEZ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDfRvlCLUFcMTcAi-dh3ncchTGtdg8o0SaJiz9euBCH6w&oe=66A1184F")',
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
  ];

  const bg = document.querySelectorAll(".Program_section .col-md-4");
  for (let i = 0; i <= backgrounds.length; i++) {}

  return (
    <section className="Program_section">
      <div className="row w-100">
        <div className="col-md-4 resources">
          <h2>Resources</h2>
          <div>
            <span>1</span>
            <span>How to get start</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor
              ex, pellentesque
            </p>
          </div>
          <div className="owl-dots d-flex gap-1 mx-3 z-2 position-relative">
            <span className="owl-dot active">
              <FaDotCircle />
            </span>
            <span className="owl-dot">
              <FaDotCircle />
            </span>
            <span className="owl-dot">
              <FaDotCircle />
            </span>
            <span className="owl-dot">
              <FaDotCircle />
            </span>
          </div>
        </div>
        <div className="col-md-4 working_hour">
          <h2>Working Hours</h2>
          <ul>
            <li>
              <span>mon-fri</span> <span>:5:30am - 11:00pm</span>
            </li>
            <li>
              <span>Saturday</span> <span>:5:30am - 11:00pm</span>
            </li>
            <li>
              <span>Sunday</span> <span>:Closed</span>
            </li>
          </ul>
          <div className="owl-dots d-flex gap-1 mx-3 z-2 position-relative">
            <span className="owl-dot active">
              <FaDotCircle />
            </span>
            <span className="owl-dot">
              <FaDotCircle />
            </span>
            <span className="owl-dot">
              <FaDotCircle />
            </span>
            <span className="owl-dot">
              <FaDotCircle />
            </span>
          </div>
        </div>
        <div className="col-md-4 insta_pics"></div>
      </div>
    </section>
  );
};

export default Programs;
