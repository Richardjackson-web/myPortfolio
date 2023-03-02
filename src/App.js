import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Home />
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
