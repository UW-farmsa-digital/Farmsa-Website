import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Constitution from './components/pages/Constitution';
import Events from './components/pages/Events';
import Resources from './components/pages/Resources';
import Team from './components/pages/Team';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/Farmsa-Website/' element={<Home/>}/>
        <Route exact path='/Farmsa-Website/about-us' element={<AboutUs/>} />
        <Route exact path='/Farmsa-Website/contact-us' element={<ContactUs/>} />
        <Route exact path='/Farmsa-Website/constitution' element={<Constitution/>} />
        <Route exact path='/Farmsa-Website/events' element={<Events/>} />
        <Route exact path='/Farmsa-Website/resources' element={<Resources/>} />
        <Route exact path='/Farmsa-Website/team' element={<Team/>} />
      </Routes>
    </Router>
  );
}

export default App;
