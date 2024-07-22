import React from "react";
import "./Services.css";

const data = [
  {
    id: 1,
    icon: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/trainer-colored.png",
    title: "Trainers",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, felis nec gravida lobortis, est felis convallis lacus, vitae commodo metus ipsum.",
    btn_text: "MEET THE STAFF",
  },
  {
    id: 2,
    icon: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/member-colored.png",
    title: "Become a Member",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, felis nec gravida lobortis, est felis convallis lacus, vitae commodo metus ipsum.",
    btn_text: "JOIN NOW",
  },
  {
    id: 3,
    icon: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/icons/group-fitness-colored.png",
    title: "Group Fitness",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, felis nec gravida lobortis, est felis convallis lacus, vitae commodo metus ipsum.",
    btn_text: "LEARN MORE",
  },
].map((item) => {
  return (
      <div className="col-md-4">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <img src={item.icon} alt="" className="mb-2" />
          <h2 className=" fw-bold">{item.title}</h2>
          <p className="Service_para_text text-secondary text-center light_inverse_text">{item.text}</p>
          <a href="" className="red_btn mt-3">
            {" "}
            {item.btn_text}
          </a>
        </div>
      </div>
  );
});

const Services = () => {
  return (
    <section className="Service_section section_gap w-100">
      <div className="container">
        <div className="row">{data}</div>
      </div>
    </section>
  );
};

export default Services;
