import './App.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Programs from './Components/Programs/Programs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Classes/>
      <Services/>
      <Testimonial/>
      <Programs/>
    </div>
  );
}

export default App;
