import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import NoPage from './Pages/NoPage/NoPage';
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from 'react-animation-on-scroll';

function App() {
  return (
    <div className="body">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    // <div className="body">
    //   <Home />
    //   <AnimationOnScroll animateIn="animate__backInUp">
    //     <About/>
    //   </AnimationOnScroll>
    //   <Portfolio/>
    //   <Contact/>
    // </div>
  );
}

export default App;
