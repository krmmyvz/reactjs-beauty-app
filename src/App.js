import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    <div>
      <div className='gradient-bg-pages'>
      <Navbar />
      <Routes>
        <Route exact path="/reactjs-beauty-app" Component={Home}/>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/contact" Component={Contact}/>
        <Route exact path="/features" Component={Features}/>        
      </Routes>
      <Footer />
      </div>
    </div>
  </>
  );
}

export default App;
