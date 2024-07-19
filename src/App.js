import './App.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Classes/>
      <Services/>
      <Testimonial/>
    </div>
  );
}

export default App;
