import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Ndtv from './pages/Ndtv';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Business from './pages/Business';
import Movies from './pages/Movies';
import Cricket from './pages/Cricket';
import Tech from './pages/Tech';
import Food from './pages/Food';
import Crypto from './pages/Crypto';
import Webstories from './pages/Webstories';
import Education from './pages/Education';
import Auto from './pages/Auto';
import Swasth from './pages/Swasth';
import Lifestyle from './pages/Lifestyle';
import Health from './pages/Health';
import Shopping from './pages/Shopping';
import Art from './pages/Art';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/ndtv" element={<Ndtv/>}/>
      <Route path="/business" element={<Business/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/cricket" element={<Cricket/>}/>
      <Route path="/tech" element={<Tech/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/crypto" element={<Crypto/>}/>
      <Route path="/webstories" element={<Webstories/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/auto" element={<Auto/>}/>
      <Route path="/swasth" element={<Swasth/>}/>
      <Route path="/lifestyle" element={<Lifestyle/> }/>
      <Route path="/health" element={<Health/> }/>
      <Route path="/shopping" element={<Shopping/>}/>
      <Route path="/art" element={<Art/> }/>
     </Routes>

     {/* <Home/> */}
     <Footer/>
    </div>
  );
}

export default App;
