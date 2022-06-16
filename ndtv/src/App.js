import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Ndtv from './pages/Ndtv';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Business from './pages/Business';

import Cricket from './pages/Cricket';
import Food from './pages/Food';
import Crypto from './pages/Crypto';
import Webstories from './pages/Webstories';
import Education from './pages/Education';
import Swasth from './pages/Swasth';

import Footer from './components/Footer';
import Live from './pages/Live';
import Latest from './pages/Latest';
import Coronavirus from './pages/Coronavirus';
import India from './pages/India';
import Opinion from './pages/Opinion';
import World from './pages/World';
import Cities from './pages/Cities';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/ndtv" element={<Ndtv/>}/>
      <Route path="/business" element={<Business/>}/>
      <Route path="/cricket" element={<Cricket/>}/>
    <Route path="/food" element={<Food/>}/>
      <Route path="/crypto" element={<Crypto/>}/>
      <Route path="/webstories" element={<Webstories/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/swasth" element={<Swasth/>}/>
      <Route path="/live" element={<Live/>}/>
      <Route path="/latest" element={<Latest/>}/>
      <Route path="/coronavirus" element={<Coronavirus/>}/>
      <Route path="/india" element={<India/>}/>
      <Route path="/opinion" element={<Opinion/>}/>
      <Route path="/world" element={<World/>}/>
      <Route path="/cities" element={<Cities/>}/>

           
     </Routes>

     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
