import "./App.css";
import React from "react";
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router className="App">
      <Routes>
        <Route
          path="/"
          element={
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
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/class" element={<Class/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/join" element={<Join/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
