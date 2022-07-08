import './App.css';
import Navbar from './Navbar/navbar';
import Aboutme from './Aboutme/Aboutme';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Portfolio/>
      <Footer/>

    </div>
  );
}

export default App;
