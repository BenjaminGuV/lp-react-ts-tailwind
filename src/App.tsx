import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Nav} from './components/Nav.component'
import BodyImagen from './components/BodyImagen.component'
import Services from './components/Services.component'
import WhoIs from "./components/WhoIs.component";
import Statistic from "./components/Statistic.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <BodyImagen />
      <div data-aos="fade-up">asdasdasdasdasdasd</div>
      <Services />
      <WhoIs />
      <Statistic />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
