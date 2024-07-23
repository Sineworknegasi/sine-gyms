import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Classes from "./Components/Classes/Classes";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Programs from "./Components/Programs/Programs";
import Maps from "./Components/Map/Maps";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./pages/Aboutus/Aboutus";
import Class from "./pages/Class/Class";
import Join from "./pages/Join/Join";
import Pricing from "./pages/Pricing/Pricing";
import Staff from "./pages/Staff/Staff";
import Contactus from "./pages/Contactus/Contactus";

function App() {
  return (
    <Router className="App">
      <Route
        path="/"
        Component={
          <>
            <Header />
            <Hero />
            <About />
            <Classes />
            <Services />
            <Testimonial />
            <Programs />
            <Maps />
            <Footer />
          </>
        }
      />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/Class" component={Class} />
      <Route path="/staff" component={Staff} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/Contactus" component={Contactus} />
      <Route path="/join" component={Join} />
    </Router>
  );
}

export default App;
