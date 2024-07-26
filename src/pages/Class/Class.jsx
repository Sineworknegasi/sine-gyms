import React from "react";
import "./Class.css";
import Header2 from "../../Components/Header/Header2";
import Footer from "../../Components/Footer/Footer";

const Class_data = [
  {
    title: "Group Fitness",
    img: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/classes/classes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem a imperdiet sapien.",
  },
  {
    title: "Yoga",
    img: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/classes/classes-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem a imperdiet sapien.",
  },
  {
    title: "Functional",
    img: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/classes/classes-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem a imperdiet sapien.",
  },
  {
    title: "Spin Class",
    img: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/classes/classes-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem a imperdiet sapien.",
  },
  {
    title: "Zumba",
    img: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/classes/classes-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem a imperdiet sapien.",
  },
  {
    title: "Conditioning",
    img: "https://www.okler.net/previews/porto/10.2.0/img/demos/gym/classes/classes-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet laoreet lorem a imperdiet sapien.",
  },
].map((item) => {
  return (
    <div className=" col-lg-4 col-md-6 col-sm-6 position-relative class_card">
      <span className="class_img">
      <img
        src={item.img}
        alt=""
        className=" img-fluid"
      />
      </span>
      <div className="Classes_card">
        <h5 className="class_title fw-bold">{item.title}</h5>
        <p className="class_pg">
          {item.description}
        </p>
      </div>
      <div className="class_btn">
        <a href="#" className="red_btn">
          LEARN MORE
        </a>
      </div>
    </div>
  );
});

const Class = () => {
  return (
    <div>
      <Header2 />
      <div className="container class_page">
        <h1 className="Page_title">Classes</h1>
        <h2 className="Page_disc fw-bold fs-4">One is for you</h2>
        <p className="about_dics">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          aliquet laoreet lorem, a imperdiet sapien tincidunt at. Vivamus sed
          libero ut diam feugiat sagittis sit amet in justo.
        </p>
      </div>
      <div className="Classes_Container">
        <div className="container">
          <div className="row">
            {Class_data}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Class;
