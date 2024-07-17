import './App.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
