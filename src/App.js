import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from 'react-animation-on-scroll';

function App() {
  return (
    <div className="body">
      <Home />
      {/* <AnimationOnScroll animateIn="animate__backInUp"> */}
        <About/>
      {/* </AnimationOnScroll> */}
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
