import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Art from "./Art";
import "./App.css";
import Contact from "./Contact";
import Classes from "./Classes";
import image from './top.png'
import Footer from './Footer';





function App() {

  return (<div>
    <div className="container">
      <img src={image} className="top"  alt="logo"/>
    </div>
    <Router>
      <nav >
        <Link to="/" className="link">WELCOME</Link>
        <Link className="link" to='/art'>ART</Link>
        <Link className="link" to='/classes'>MASTER CLASSES</Link>
        <Link className="link" to='/about'>ABOUT</Link>
        <Link className="link" to='/contact'>CONTACT</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="art" element={<Art/>} />
        <Route path="classes" element={<Classes />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
